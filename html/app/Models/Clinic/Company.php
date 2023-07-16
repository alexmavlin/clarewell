<?php

namespace App\Models\Clinic;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Models\Clinic\Clinic;
use App\Models\Clinic\Product;
use App\Models\CommonModels\Consultation;

class Company extends Model
{
    protected $table = 'companies';
    protected $guarded = false;

    /* Eloquent relationships */
    public function owner() {
        return $this->belongsTo(User::class, 'owner_id');
    }
    public function clinics() {
        return $this->hasMany(Clinic::class);
    }
    public function employees() {
        return $this->hasMany(User::class, 'company_id');
    }
    public function clinicians() {
        return $this->hasMany(User::class, 'company_id')->where('role_id', '=', 4);
    }
    public function products() {
        return $this->hasMany(Product::class, 'company_id');
    }
    public function consultations() {
        return $this->hasMany(Consultation::class, 'company_id');
    }
    public function appointments_through_clinics() {
        return $this->hasManyThrough(Appointment::class, Clinic::class, 'company_id');
    }
}
