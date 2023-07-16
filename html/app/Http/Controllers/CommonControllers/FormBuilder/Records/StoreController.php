<?php

namespace App\Http\Controllers\CommonControllers\FormBuilder\Records;

use App\Http\Controllers\Controller;
use App\Http\Requests\CommonRequests\FormBuilder\Records\StoreRequest;
use App\Models\CommonModels\Record;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $storeRequest)
    {
        $storeRequest->validated();
        $store_data = [
            'name' => $storeRequest->name,
        ];
        $record = Record::create($store_data);
        $record->consultation_sctions()->attach($storeRequest->section_id);
    }
}
