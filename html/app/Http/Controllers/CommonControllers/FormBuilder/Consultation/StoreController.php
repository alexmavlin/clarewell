<?php

namespace App\Http\Controllers\CommonControllers\FormBuilder\Consultation;

use App\Http\Controllers\Controller;
use App\Http\Requests\CommonRequests\FormBuilder\Consultation\StoreRequest;
use App\Models\Clinic\Company;
use App\Models\CommonModels\Consultation;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $storeRequest)
    {
        $storeRequest->validated();

        $store_data = [
            'name' => $storeRequest->name,
            'company_id' => Company::where('owner_id', auth()->user()->id)->first(['id'])->id,
        ];

        $new_consultation = Consultation::create($store_data);
        return response()->json($new_consultation);
    }
}
