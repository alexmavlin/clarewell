<?php

namespace App\Http\Controllers\CommonControllers\FormBuilder\Fieldsets;

use App\Http\Controllers\Controller;
use App\Models\CommonModels\Fieldset;
use Illuminate\Http\Request;

class DeleteController extends Controller
{
    public function __invoke(Fieldset $fieldset)
    {
        $fieldset->records()->detach();
        $fieldset->delete();
    }
}
