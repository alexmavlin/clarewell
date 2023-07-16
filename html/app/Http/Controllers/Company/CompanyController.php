<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;
use App\Models\Clinic\Company;
/* Requests */
use App\Http\Requests\Company\Company\StoreRequest;
use App\Http\Requests\Company\Company\UpdateRequest;

class CompanyController extends Controller
{
    public function getCompanyByOwner() {
        $user_id = auth()->user()->id;
        $response_data = [
            'company' => Company::where('owner_id', $user_id)->with('clinics', 'employees')->first(),
        ];
        return response()->json($response_data);
    }

    public function getCompanyData($company) {
        $respose_data = [
            'company' => Company::where('id', $company)->with('clinics')->first(),
        ];
        return response()->json($respose_data);
    }

    public function storeNewCompany(StoreRequest $request) {
        $data = $request->validated();
        $data['owner_id'] = auth()->user()->id;
        Company::create($data);
    }

    public function edit($company) {
        $response_data = [
            'company' => Company::where('id', $company)->select('name', 'country', 'city', 'district', 'address', 'postal_code', 'vat')->first(),
        ];
        return $response_data;
    }

    public function update(Company $company, UpdateRequest $request) {
        $data = $request->validated();
        $company->update($data);
    }
}
