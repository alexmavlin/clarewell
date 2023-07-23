<?php

namespace App\Http\Controllers\Company\Roles\Receptionists\Appointments;

use App\Http\Controllers\Controller;
use App\Http\Requests\Roles\Receptionists\Appointments\SearchRequest;
use App\Models\Clinic\Appointment;
use App\Models\Clinic\Company;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __invoke(SearchRequest $searchRequest)
    {
        $searchRequest->validated();

        $company_id = auth()->user()->company_id;
        $company = Company::find($company_id);

        if($searchRequest->searchBarData) {

            $query = Appointment::query();
            $query->whereHas('clinic', function($q) use ($company_id) {
                $q->where('company_id', $company_id);
            });


            $requestString = $searchRequest->searchBarData;

            /* Filter bay Name */
            $matchResult = Appointment::whereHas('clinic', function($q) use ($company_id) {
                $q->where('company_id', $company_id);
            })->whereHas('patient', function($q) use ($requestString) {
                $q->where('name', 'like', '%' . $requestString . '%');
            })->first();

            if($matchResult) {
                $query->whereHas('patient', function($q) use ($requestString) {
                    $q->where([
                        ['name', 'like', '%' . $requestString . '%']
                    ]);
                });
            }

            /* Filter by Email */
            $matchResult = Appointment::whereHas('clinic', function($q) use ($company_id) {
                $q->where('company_id', $company_id);
            })->whereHas('patient', function($q) use ($requestString) {
                $q->where('email', 'like', '%' . $requestString . '%');
            })->first();

            if($matchResult) {
                $query->whereHas('patient', function($q) use ($requestString) {
                    $q->where([
                        ['email', 'like', '%' . $requestString . '%']
                    ]);
                });
            }

            /* Filter by Phone */
            $matchResult = Appointment::whereHas('clinic', function($q) use ($company_id) {
                $q->where('company_id', $company_id);
            })->whereHas('patient', function($q) use ($requestString) {
                $q->where('phone', 'like', '%' . $requestString . '%');
            })->first();

            if($matchResult) {
                $query->whereHas('patient', function($q) use ($requestString) {
                    $q->where([
                        ['phone', 'like', '%' . $requestString . '%']
                    ]);
                });
            }
            /* Filter by Patient Id */
            $matchResult = Appointment::whereHas('clinic', function($q) use ($company_id) {
                $q->where('company_id', $company_id);
            })->whereHas('patient', function($q) use ($requestString) {
                $q->where('patient_id', 'like', '%' . $requestString . '%');
            })->first();

            if($matchResult) {
                $query->whereHas('patient', function($q) use ($requestString) {
                    $q->where([
                        ['patient_id', 'like', '%' . $requestString . '%']
                    ]);
                });
            }

            return $query->with('patient')->paginate(25);
        }

        return $company->appointments_through_clinics()->orderBy('id', 'DESC')->with('patient')->paginate(25);
    }
}
