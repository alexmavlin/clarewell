<?php

namespace App\Http\Requests\CommonRequests\FormBuilder\Consultation;

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
            'name' => 'required|string|max:255',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Please provide a name for the consultation.',
            'name.string' => 'Please enter a valid name for the consultation.',
            'name.max:255' => 'The maximum length for the name field is 255 characters. Please enter a shorter name.',
        ];
    }
}
