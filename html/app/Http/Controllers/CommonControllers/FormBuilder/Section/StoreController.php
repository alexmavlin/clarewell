<?php

namespace App\Http\Controllers\CommonControllers\FormBuilder\Section;

use App\Http\Controllers\Controller;
use App\Http\Helpers\Functions\RandomString;
use App\Http\Requests\CommonRequests\FormBuilder\Section\StoreRequest;
use App\Models\CommonModels\ConsultationSection;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $storeRequest)
    {
        $storeRequest->validated();

        $store_data = [
            'name' => $storeRequest->name,
        ];

        $consultation_section = ConsultationSection::create($store_data);

        $consultation_section->consultations()->attach($storeRequest->consultation_id);
    }
}
