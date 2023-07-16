<?php

namespace App\Models\Clinic;

use Illuminate\Database\Eloquent\Model;
use App\Models\Clinic\Clinic;

class OpeningHour extends Model
{
    protected $table = 'opening_hours';
    protected $guarded = false;

    /* Eloquent relationships */
    public function clinic() {
        return $this->belongsTo(Clinic::class, 'clinic_id');
    }
}
