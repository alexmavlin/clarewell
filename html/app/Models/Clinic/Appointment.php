<?php

namespace App\Models\Clinic;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $table = 'appointments';
    protected $guarded = false;

    public function clinician() {
        return $this->belongsTo(User::class, 'clinician_id');
    }
    public function patient() {
        return $this->belongsTo(User::class, 'patient_id');
    }
    public function clinic() {
        return $this->belongsTo(Clinic::class, 'clinic_id');
    }
}
