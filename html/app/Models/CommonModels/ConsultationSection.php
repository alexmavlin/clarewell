<?php

namespace App\Models\CommonModels;

use Illuminate\Database\Eloquent\Model;

class ConsultationSection extends Model
{
    protected $table = 'consultation_sections';
    protected $guarded = false;

    public function consultations() {
        return $this->belongsToMany(Consultation::class, 'consultations_consultation_sections', 'consultation_section_id', 'consultation_id');
    }

    public function records() {
        return $this->belongsToMany(Record::class, 'consultation_sections_records', 'consultation_section_id', 'record_id');
    }
}
