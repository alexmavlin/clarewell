<?php

namespace App;

use App\Models\Clinic\Appointment;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
/* Models */
use App\Models\Clinic\Company;
use App\Models\Clinic\Product;
use App\Models\Clinic\Clinic;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = false;

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }


    /* Eloquent relationships */
    public function role() {
        return $this->belongsTo(Role::class, 'role_id');
    }
    public function company() {
        return $this->hasOne(Company::class, 'owner_id');
    }
    public function clinic() {
        return $this->belongsToMany(Clinic::class);
    }

    public function company_products() {
        return $this->hasManyThrough(Product::class, Company::class, 'owner_id');
    }
    public function clinics_through_company() {
        return $this->hasManyThrough(Clinic::class, Company::class, 'owner_id');
    }
    
    public function clinician_appointments() {
        return $this->hasMany(Appointment::class, 'clinician_id');
    }
    public function patient_appointments() {
        return $this->hasMany(Appointment::class, 'patient_id');
    }
}
