<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;
/* Requests */
use App\Http\Requests\Company\Employees\StoreRequest;
/* Models */
use App\User;
use App\Models\Clinic\Company;
use App\Models\Role;
/* Facades */
use Illuminate\Support\Facades\Hash;
/* Email */
use Illuminate\Support\Facades\Mail;
use App\Mail\Corporate\Company\EmployeeCreateMail;
use App\Mail\Corporate\Company\EmployeeCreateOwMail;

class EmployeeController extends Controller
{
    public function get_employyes() {
        $company = Company::where('owner_id', auth()->user()->id)->first();
        $response_data = [
            'employees' => $company->employees()->with('role')->get(),
        ];
        return response()->json($response_data);
    }

    public function get_clinicians(Company $company) {
        return $company->clinicians()->get();
    }

    public function create() {
        return response()->json([
            'roles' => Role::all(),
        ]);
    }

    public function store(StoreRequest $request) {
        
        $data = $request->validated();

        $owner_id = auth()->user()->id;
        $company_id = Company::where('owner_id', $owner_id)->first()->id;
        $password_string = bin2hex(random_bytes(5));
        $employee = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'password' => Hash::make($password_string),
            'role_id' => $data['role_id'],
            'company_id' => $company_id,
            'tmp_pass' => $password_string,
        ]);

        $email_data = [
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => $password_string,
        ];
        Mail::to($email_data['email'])->send(new EmployeeCreateMail($email_data));

        $email_data['name'] = auth()->user()->name;
        $user_email_address = auth()->user()->email;
        Mail::to($user_email_address)->send(new EmployeeCreateOwMail($email_data));
    }
}
