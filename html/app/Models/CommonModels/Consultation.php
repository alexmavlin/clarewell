<?php

namespace App\Models\CommonModels;

use App\Models\Clinic\Company;
use Illuminate\Database\Eloquent\Model;

class Consultation extends Model
{
    protected $table = 'consultations';
    protected $guarded = false;

    public function sections() {
        return $this->belongsToMany(ConsultationSection::class, 'consultations_consultation_sections', 'consultation_id', 'consultation_section_id');
    }
    public function company() {
        return $this->belongsTo(Company::class, 'company_id');
    }
}
