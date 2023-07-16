<?php

namespace App\Http\Controllers\CommonControllers\FormBuilder\Fieldsets;

use App\Http\Controllers\Controller;
use App\Http\Helpers\Functions\RandomString;
use App\Http\Requests\CommonRequests\FormBuilder\Fieldsets\StoreRequest;
use App\Models\CommonModels\Fieldset;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $storeRequest)
    {
        $storeRequest->validated();
        $random_string = new RandomString(12);
        $internal_name = $random_string->make();
        // return $internal_name;
        $store_data = [
            'name' => $internal_name,
            'content_direction' => 2,
        ];
        $fieldset = Fieldset::create($store_data);
        $fieldset->records()->attach($storeRequest->record_id);
    }
}
