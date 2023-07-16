<?php

namespace App\Http\Requests\Company\Company;

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
            'name' => 'required|string|max:191',
            'country' => 'nullable|string|max:191',
            'district' => 'nullable|string|max:191',
            'city' => 'nullable|string|max:191',
            'address' => 'nullable|string|max:191',
            'postal_code' => 'nullable|string|max:191',
            'vat' => 'nullable|string|max:50',
        ];
    }
    public function messages() {
        return [
            //
        ];
    }
}
