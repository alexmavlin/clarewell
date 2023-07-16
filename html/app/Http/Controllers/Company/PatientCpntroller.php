<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;
/* Requests */
use App\Http\Requests\Company\Patients\StoreRequest;
use App\Http\Requests\Company\Patients\UpdateRequest;
use App\Models\Clinic\Company;
use App\User;
use Illuminate\Support\Facades\Hash;

class PatientCpntroller extends Controller
{
    public function index()
    {
        return User::where([
            'is_patient' => true,
            'company_id' => Company::where('owner_id', auth()->user()->id)->first()->id,
        ])->get();
    }

    public function getPatients(Company $company) {
        return User::select('id', 'name', 'patient_id')->where([
            ['company_id', $company->id],
            ['is_patient', 1],
        ])->get();
    }

    public function store(StoreRequest $request) 
    {
        $store_data = $request->validated();

        $store_data['tmp_pass'] = bin2hex(random_bytes(5));
        $store_data['password'] = Hash::make($store_data['tmp_pass']);
        $store_data['is_patient'] = true;
        $store_data['company_id'] = Company::where('owner_id', auth()->user()->id)->first()->id;

        
        $store_data['patient_id'] = bin2hex(random_bytes(3));
        $existing_patient_id = User::where('patient_id', $store_data['patient_id'])->first();

        do {
            $store_data['patient_id'] = bin2hex(random_bytes(3));
            $existing_patient_id = User::where('patient_id', $store_data['patient_id'])->first();
        } while($existing_patient_id);

        User::create($store_data);
    }

    public function show(User $patient)
    {
        return $patient;
    }
}
