<?php

namespace App\Http\Controllers\CommonControllers\FormBuilder\Section;

use App\Http\Controllers\Controller;
use App\Models\CommonModels\ConsultationSection;
use Illuminate\Http\Request;

class DeleteController extends Controller
{
    public function __invoke(ConsultationSection $section)
    {
        $section->consultations()->detach();
        $section->delete();
    }
}
