<?php

namespace App\Http\Controllers\CommonControllers\FormBuilder\Consultation;

use App\Http\Controllers\Controller;
use App\Models\CommonModels\Consultation;
use Illuminate\Http\Request;

class EditController extends Controller
{
    public function __invoke($consultation)
    {
        $consultation = Consultation::where('id', $consultation)
                                        ->with(['sections' => function($q) {
                                            $q->with(['records' => function($q) {
                                                $q->with(['fieldsets' => function($q) {
                                                    $q->with('form_fields');
                                                }]);
                                            }]);
                                        }])
                                        ->first();
        return $consultation;
    }
}
