<?php

namespace App\Http\Requests\Company\Clinic;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
            'city' => 'nullable|string|max:191',
            'district' => 'nullable|string|max:191',
            'address' => 'nullable|string|max:191',
            'postal_code' => 'nullable|string|max:191',
            'email_primary' => 'nullable|string|max:191|email:rfc,dns',
            'email_1' => 'nullable|email:rfc,dns',
            'email_2' => 'nullable|email:rfc,dns',
            'phone_primary' => 'nullable|max:191',
            'phone_1' => 'nullable',
            'phone_2' => 'nullable',
            'google_maps_link' => 'nullable',
            'google_maps_iframe' => 'nullable',
            'opening_hours' => 'nullable|array',
        ];
    }
}
