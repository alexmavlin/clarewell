<?php

namespace App\Models\CommonModels;

use Illuminate\Database\Eloquent\Model;

class FormSelectOption extends Model
{
    protected $table = 'form_select_options';
    protected $guarded = false;

    public function form_field() {
        return $this->belongsTo(FormField::class, 'form_field_id');
    }
}
