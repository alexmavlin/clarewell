<?php

namespace App\Http\Controllers\CommonControllers\FormBuilder;

use App\Http\Controllers\Controller;
use App\Models\Clinic\Company;
use App\Models\CommonModels\Consultation;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __invoke()
    {
        $owner_id = auth()->user()->id;
        $company_id = Company::select('id')->where('owner_id', $owner_id)->first();
        $consultations = Company::find($company_id->id)->consultations()->with(['sections' => function($q) {$q->with('records');}])->get();
        // dd($consultations);

        return response()->json($consultations);
    }
}
