<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;
/* Models */
use App\Models\Clinic\OpeningHour;
use App\Models\Clinic\Clinic;
use App\Models\Clinic\Company;
/* Requests */
use App\Http\Requests\Company\Clinic\StoreRequest;
use App\Http\Requests\Company\Clinic\UpdateRequest;
use App\User;

class ClinicController extends Controller
{
    public function index(Company $company) {
        return $company->clinics()->paginate(10);
    }

    public function store(StoreRequest $request) {
        $data = $request->validated();
        $auth_id = auth()->user()->id;

        $clinic_instance = Clinic::create([
            'city' => $data['city'],
            'district' => $data['district'],
            'address' => $data['address'],
            'postal_code' => $data['postal_code'],
            'email_primary' => $data['email_primary'],
            'email_1' => $data['email_2'] ? $data['email_2'] : '',
            'email_2' => $data['email_3'] ? $data['email_3'] : '',
            'phone_primary' => $data['phone_primary'],
            'phone_1' => $data['phone_2'] ? $data['phone_2'] : '',
            'phone_2' => $data['phone_3'] ? $data['phone_3'] : '',
            'google_maps_link' => $data['google_maps_link'],
            'google_maps_iframe' => $data['google_maps_iframe'],
            'company_id' => Company::where('owner_id', $auth_id)->first()->id,
        ]);

        for($i = 0; $i < 7; $i++){
            $closed_var = "closed$i";
            $open_var = "open$i";
            $close_var = "close$i";
            if(isset($data[$closed_var]) && !$data[$closed_var]){
                OpeningHour::create([
                    'clinic_id' => $clinic_instance->id,
                    'day' => $i,
                    'open_hour' => $data[$open_var] ? $data[$open_var] : '',
                    'close_hour' => $data[$close_var] ? $data[$close_var] : '',
                    'closed' => false,
                ]);
            } else {
                OpeningHour::create([
                    'clinic_id' => $clinic_instance->id,
                    'day' => $i,
                    'open_hour' => '',
                    'close_hour' => '',
                    'closed' => true,
                ]);
            }
        }
    }

    public function show($clinic) {
        return Clinic::with('opening_hours', 'company')->find($clinic);
    }

    public function update(Clinic $clinic, UpdateRequest $updateRequest) {
        $data = $updateRequest->validated();

        $clinicUpdateData = [
            'address' => $data['address'] ? $data['address'] : '',
            'city' => $data['city'] ? $data['city'] : '',
            'district' => $data['district'] ? $data['district'] : '',
            'email_1' => $data['email_1'] ? $data['email_1'] : '',
            'email_2' => $data['email_2'] ? $data['email_2'] : '',
            'email_primary' => $data['email_primary'] ? $data['email_primary'] : '',
            'google_maps_iframe' => $data['google_maps_iframe'] ? $data['google_maps_iframe'] : '',
            'google_maps_link' => $data['google_maps_link'] ? $data['google_maps_link'] : '',
            'phone_1' => $data['phone_1'] ? $data['phone_1'] : '',
            'phone_2' => $data['phone_2'] ? $data['phone_2'] : '',
            'phone_primary' => $data['phone_primary'] ? $data['phone_primary'] : '',
            'postal_code' => $data['postal_code'] ? $data['postal_code'] : '',
        ];

        $result = $clinic->update($clinicUpdateData);

        foreach($data['opening_hours'] as $opening_hour) {
            $openingHourInstance = OpeningHour::find($opening_hour['id']);

            $openingHourInstance->open_hour = $opening_hour['open_hour'] ? $opening_hour['open_hour'] : '';
            $openingHourInstance->close_hour = $opening_hour['close_hour'] ? $opening_hour['close_hour'] : '';
            $openingHourInstance->closed = $opening_hour['closed'] ? 1 : 0;
            
            $openingHourInstance->save();
        }
        // return $data;
    }

    public function delete(Clinic $clinic) {
        return $clinic->delete();
    }
}
