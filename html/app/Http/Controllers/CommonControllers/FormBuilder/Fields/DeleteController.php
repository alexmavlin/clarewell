<?php

namespace App\Http\Controllers\CommonControllers\FormBuilder\Fields;

use App\Http\Controllers\Controller;
use App\Models\CommonModels\FormField;
use Illuminate\Http\Request;

class DeleteController extends Controller
{
    public function __invoke(FormField $field)
    {
        $field->delete();
    }
}
