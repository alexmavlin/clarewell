<?php

namespace App\Models\CommonModels;

use Illuminate\Database\Eloquent\Model;

class Fieldset extends Model
{
    protected $table = 'fieldsets';
    protected $guarded = false;

    public function records() {
        return $this->belongsToMany(Fieldset::class, 'fieldsets_records', 'fieldset_id', 'record_id');
    }

    public function form_fields() {
        return $this->hasMany(FormField::class, 'fieldset_id');
    }
}
