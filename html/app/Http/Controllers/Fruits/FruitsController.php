<?php

namespace App\Http\Controllers\Fruits;

use App\Http\Controllers\Controller;
use App\Models\Clinic\Company;
use App\User;

class FruitsController extends Controller
{
    public function test() {
        $a = 40;
        $b = 50;
        $c = ($a + $b) / ($a * $b + $a / $b);
        return $c;
    }
    public function usr() {
        $company_details = Company::where('owner_id', auth()->user()->id)->with('owner')->first();
        return response()->json($company_details);
    }
}
