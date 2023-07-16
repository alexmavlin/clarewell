<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;
use App\Http\Requests\Company\Appointments\StoreRequest;
use App\Models\Clinic\Appointment;
use App\Models\Clinic\Company;

class AppointmentController extends Controller
{

    public function index(Company $company) {
        return response()->json($company->appointments_through_clinics()->get());
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
        return $appointment;
    }


}
