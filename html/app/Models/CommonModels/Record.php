<?php

namespace App\Models\CommonModels;

use Illuminate\Database\Eloquent\Model;

class Record extends Model
{
    protected $table = 'records';
    protected $guarded = false;

    public function consultation_sctions() {
        return $this->belongsToMany(ConsultationSection::class, 'consultation_sections_records', 'record_id', 'consultation_section_id');
    }

    public function fieldsets() {
        return $this->belongsToMany(Fieldset::class, 'fieldsets_records', 'record_id', 'fieldset_id');
    }
}
