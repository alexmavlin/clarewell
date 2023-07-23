<?php

namespace App\Http\Controllers\Company\Roles\Clinicians\Patients;

use App\Http\Controllers\Controller;
use App\Http\Requests\Roles\Clinicians\Patients\SearchRequest;
use App\User;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __invoke(SearchRequest $searchRequest)
    {
        $searchRequest->validated();

        $patients = User::query();
        $patients->where([
            ['is_patient', 1],
            ['company_id', auth()->user()->company_id],
        ]);
        // return $searchRequest->searchBarData;
        if($searchRequest->searchBarData) {
            if(User::where('name', 'like', '%' . $searchRequest->searchBarData . '%')->first()){
                $patients->where('name', 'like', '%' . $searchRequest->searchBarData . '%');
            }
            if(User::where('patient_id', 'like', '%' . $searchRequest->searchBarData . '%')->first()){
                $patients->where('patient_id', 'like', '%' . $searchRequest->searchBarData . '%');
            }
            if(User::where('email', 'like', '%' . $searchRequest->searchBarData . '%')->first()) {
                $patients->where('email', 'like', '%' . $searchRequest->searchBarData . '%');
            }
            // $patients->where('phone', 'like', '%' . $searchRequest->searchBarData . '%');
            // $patients->where('country', 'like', '%' . $searchRequest->searchBarData . '%');
            // $patients->where('district', 'like', '%' . $searchRequest->searchBarData . '%');
            // $patients->where('city', 'like', '%' . $searchRequest->searchBarData . '%');
            // $patients->where('address', 'like', '%' . $searchRequest->searchBarData . '%');
        }
        
        return $patients->paginate(10);
    }
}
