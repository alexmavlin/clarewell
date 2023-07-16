<?php

namespace App\Models\Clinic;
use App\Models\Clinic\Company;
use App\Models\Clinic\OpeningHour;
use App\User;

use Illuminate\Database\Eloquent\Model;

class Clinic extends Model
{
    protected $table = 'clinics';
    protected $guarded = false;

    /* Eloquent relationships */
    public function company() {
        return $this->belongsTo(Company::class);
    }
    public function opening_hours() {
        return $this->hasMany(OpeningHour::class, 'clinic_id');
    }
    public function users() {
        return $this->belongsToMany(User::class);
    }
    public function appointments() {
        return $this->hasMany(Appointment::class, 'clinic_id');
    }
}
