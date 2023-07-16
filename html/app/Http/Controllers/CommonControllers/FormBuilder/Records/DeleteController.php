<?php

namespace App\Http\Controllers\CommonControllers\FormBuilder\Records;

use App\Http\Controllers\Controller;
use App\Models\CommonModels\Record;
use Illuminate\Http\Request;

class DeleteController extends Controller
{
    public function __invoke(Record $record)
    {
        $record->consultation_sctions()->detach();
        $record->delete();
    }
}
