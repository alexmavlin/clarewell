<?php

namespace App\Http\Controllers\CommonControllers\FormBuilder\Fields;

use App\Http\Controllers\Controller;
use App\Http\Helpers\Functions\RandomString;
use App\Models\CommonModels\FormField;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    public function __invoke($id)
    {   
        $random_string = new RandomString(6);
        $internal_name = $random_string->make();
        

        $store_data = [
            'name' => $internal_name,
            'fieldset_id' => $id,
        ];

        $result = FormField::create($store_data);
    }
}
