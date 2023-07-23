<?php

namespace App\Http\Controllers\Company\Roles\Receptionists;

use App\Http\Controllers\Controller;
use App\Models\Clinic\Company;
use Illuminate\Http\Request;

class CalendarController extends Controller
{
    public function __invoke()
    {
        $company_id = auth()->user()->company_id;
        $company = Company::find($company_id);
        $appointments = $company->appointments_through_clinics()->
                                    with(['clinician' => function($q) {
                                        $q->select('id', 'name');
                                    }])->with(['patient' => function($q){
                                        $q->select('id', 'name', 'patient_id');
                                    }])->with(['clinic' => function($q){
                                        $q->select('id', 'city', 'address');
                                    }])->get();
                                    
        return response()->json($appointments);
    }
}
