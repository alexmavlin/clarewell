<?php

namespace App\Models\CommonModels;

use Illuminate\Database\Eloquent\Model;

class FormField extends Model
{
    protected $table = 'form_fields';
    protected $guarded = false;

    public function fieldset() {
        return $this->belongsTo(Fieldset::class, 'fieldset_id');
    }

    public function select_options() {
        return $this->hasMany(FormSelectOption::class, 'form_field_id');
    }
}
