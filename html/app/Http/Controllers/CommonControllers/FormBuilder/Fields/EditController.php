<?php

namespace App\Http\Controllers\CommonControllers\FormBuilder\Fields;

use App\Http\Controllers\Controller;
use App\Http\Requests\CommonRequests\FormBuilder\Fields\EditRequest;
use App\Models\CommonModels\FormField;
use Illuminate\Http\Request;

class EditController extends Controller
{
    public function __invoke(FormField $field, EditRequest $editRequest)
    {
        $editRequest->validated();
        $store_data = [
            'name' => $editRequest->name ? $editRequest->name : $field->name,
            'placeholder' => $editRequest->placeholder ? $editRequest->placeholder : $field->placeholder,
            'type' => $editRequest->type ? $editRequest->type : $field->type,
        ];
        $field->update($store_data);
    }
}
