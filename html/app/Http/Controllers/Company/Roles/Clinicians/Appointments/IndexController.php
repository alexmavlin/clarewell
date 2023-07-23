<?php

namespace App\Http\Controllers\Company\Roles\Clinicians\Appointments;

use App\Http\Controllers\Controller;
use App\Http\Requests\Roles\Clinicians\Appointments\SearchRequest;
use App\Models\Clinic\Appointment;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __invoke(SearchRequest $searchRequest)
    {
        $searchRequest->validated();

        $clinician_id = auth()->user()->id;

        if($searchRequest->searchBarData) {

            $query = Appointment::query();

            $requestString = $searchRequest->searchBarData;

            /* Filter bay Name */
            $matchResult = Appointment::select('id')->whereHas('patient', function($q) use ($requestString) {
                $q->where([
                    ['clinician_id', auth()->user()->id],
                    ['name', 'like', '%' . $requestString . '%']
                ]);
            })->first();

            if($matchResult) {
                $query->whereHas('patient', function($q) use ($requestString) {
                    $q->where([
                        ['clinician_id', auth()->user()->id],
                        ['name', 'like', '%' . $requestString . '%']
                    ]);
                });
            }

            /* Filter by Email */
            $matchResult = Appointment::select('id')->whereHas('patient', function($q) use ($requestString) {
                $q->where([
                    ['email', 'like', '%' . $requestString . '%']
                ]);
            })->first();

            if($matchResult) {
                $query->whereHas('patient', function($q) use ($requestString) {
                    $q->where([
                        ['email', 'like', '%' . $requestString . '%']
                    ]);
                });
            }

            /* Filter by Phone */
            $matchResult = Appointment::select('id')->whereHas('patient', function($q) use ($requestString) {
                $q->where([
                    ['phone', 'like', '%' . $requestString . '%']
                ]);
            })->first();

            if($matchResult) {
                $query->whereHas('patient', function($q) use ($requestString) {
                    $q->where([
                        ['phone', 'like', '%' . $requestString . '%']
                    ]);
                });
            }
            /* Filter by Patient Id */
            $matchResult = Appointment::select('id')->whereHas('patient', function($q) use ($requestString) {
                $q->where([
                    ['patient_id', 'like', '%' . $requestString . '%']
                ]);
            })->first();

            if($matchResult) {
                $query->whereHas('patient', function($q) use ($requestString) {
                    $q->where([
                        ['patient_id', 'like', '%' . $requestString . '%']
                    ]);
                });
            }

            return $query->where('clinician_id', $clinician_id)->with('patient')->paginate(25);
        }

        return Appointment::where('clinician_id', $clinician_id)->orderBy('id', 'DESC')->with('patient')->paginate(25);
    }
}
