<?php

namespace App\Http\Controllers\Company\Roles\Clinicians;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class CalendarController extends Controller
{
    public function get_appointments() {
        $clinician_id = auth()->user()->id;
        $clinician_instance = User::find($clinician_id);
        $appointments = $clinician_instance->clinician_appointments()->
                            with(['clinician' => function($q) {
                                $q->select('id', 'name');
                            }])->with(['patient' => function($q){
                                $q->select('id', 'name', 'patient_id');
                            }])->with(['clinic' => function($q){
                                $q->select('id', 'city', 'address');
                            }])->get();
        // $appointments = $clinician_instance->with(['clinician_appointments' => function($q){
        //     $q->with(['clinician' => function($q) {
        //         $q->select('id', 'name');
        //     }])->with(['patient' => function($q){
        //         $q->select('id', 'name', 'patient_id');
        //     }])->with(['clinic' => function($q){
        //         $q->select('id', 'city', 'address');
        //     }]);
        // }])->get();
        return response()->json($appointments);
    }
}
