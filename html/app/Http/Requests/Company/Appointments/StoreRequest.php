<?php

namespace App\Http\Requests\Company\Appointments;

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
            'start_time' => 'required',
            'end_time' => 'required',
            'notes' => 'nullable',
            'clinician_id' => 'required',
            'patient_id' => 'required',
            'clinic_id' => 'required',
        ];
    }
}
