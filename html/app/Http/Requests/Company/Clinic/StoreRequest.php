<?php

namespace App\Http\Requests\Company\Clinic;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'city' => 'required|string|max:191',
            'district' => 'required|string|max:191',
            'address' => 'required|string|max:191',
            'postal_code' => 'required|string|max:191',
            'email_primary' => 'required|string|max:191|email:rfc,dns',
            'email_2' => 'nullable|email:rfc,dns',
            'email_3' => 'nullable|email:rfc,dns',
            'phone_primary' => 'required|max:191',
            'phone_2' => 'nullable',
            'phone_3' => 'nullable',
            'google_maps_link' => 'nullable',
            'google_maps_iframe' => 'nullable',
            'open0' => 'nullable',
            'open1' => 'nullable',
            'open2' => 'nullable',
            'open3' => 'nullable',
            'open4' => 'nullable',
            'open5' => 'nullable',
            'open6' => 'nullable',
            'close0' => 'nullable',
            'close1' => 'nullable',
            'close2' => 'nullable',
            'close3' => 'nullable',
            'close4' => 'nullable',
            'close5' => 'nullable',
            'close6' => 'nullable',
            'closed0' => 'nullable',
            'closed2' => 'nullable',
            'closed3' => 'nullable',
            'closed4' => 'nullable',
            'closed5' => 'nullable',
            'closed6' => 'nullable',
            'closed1' => 'nullable',
        ];
    }
}
