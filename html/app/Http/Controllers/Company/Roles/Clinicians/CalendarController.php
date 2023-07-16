<?php

namespace App\Http\Controllers\Company\Roles\Clinicians;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class CalendarController extends Controller
{
    public function get_appointments() {
        $user_id = auth()->user()->id;
        $appointments = User::find($user_id)->clinician_appointments()->get();
        return response()->json($appointments);
    }
}
