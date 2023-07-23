<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;
use App\Http\Requests\Company\Appointments\StoreRequest;
use App\Mail\Corporate\Company\Appointments\NewAppointmentForClinicianMail;
use App\Mail\Corporate\Company\Appointments\NewAppointmentForPatientMail;
use App\Models\Clinic\Appointment;
use App\Models\Clinic\Clinic;
use App\Models\Clinic\Company;
use App\User;
use Illuminate\Support\Facades\Mail;

class AppointmentController extends Controller
{

    public function index(Company $company) {
        // return response()->json($company->appointments_through_clinics()->get());
        return $company->appointments_through_clinics()->
                with(['clinician' => function($q){
                    $q->select('id', 'name');
                }])->with(['patient' => function($q){
                    $q->select('id', 'name', 'patient_id');
                }])->with(['clinic' => function($q){
                    $q->select('id', 'city', 'address');
                }])->get();
    }

    public function store(StoreRequest $storeRequest) {
        $data = $storeRequest->validated();

        $appointment = Appointment::create($data);

        $clinician = User::find($storeRequest->clinician_id);
        $patient = User::find($storeRequest->patient_id);
        $clinic = Clinic::find($storeRequest->clinic_id);

        $clinician_email_data = [
            'name' => $clinician->name,
            'clinic' => [
                'city' => $clinic->city,
                'address' => $clinic->address,
            ],
            'start_time' => $appointment->start_time,
            'end_time' => $appointment->end_time,
            'patient' => [
                'name' => $patient->name,
                'email' => $patient->email,
                'phone' => $patient->phone,
            ],
            'details' => $appointment->notes
        ];
        Mail::to($clinician->email)->send(new NewAppointmentForClinicianMail($clinician_email_data));

        $patient_email_data = [
            'name' => $patient->name,
            'clinic' => [
                'city' => $clinic->city,
                'address' => $clinic->address,
            ],
            'start_time' => $appointment->start_time,
            'end_time' => $appointment->end_time,
            'clinician' => [
                'name' => $clinician->name,
                'email' => $clinician->email,
                'phone' => $clinician->phone,
            ],
            'details' => $appointment->notes
        ];
        Mail::to($patient->email)->send(new NewAppointmentForPatientMail($patient_email_data));
        return $appointment;
    }


}
