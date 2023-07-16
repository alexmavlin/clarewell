<?php

namespace App\Http\Controllers\CommonControllers\FormBuilder\Fieldsets;

use App\Http\Controllers\Controller;
use App\Http\Requests\CommonRequests\FormBuilder\Fieldsets\EditRequest;
use App\Models\CommonModels\Fieldset;
use Illuminate\Http\Request;

class EditController extends Controller
{
    public function __invoke(Fieldset $fieldset, EditRequest $editRequest)
    {
        $editRequest->validated();
        $update_data = [
            'content_direction' => $editRequest->content_direction,
        ];
        $fieldset->update($update_data);
    }
}
