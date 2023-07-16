<?php

namespace App\Http\Helpers\Functions;

class RandomString {
    private $length;
    private $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    public function __construct($length)
    {
        $this->length = $length;
    }

    public function make()
    {
        $randstring = '';
        for ($i = 0; $i < $this->length; $i++) {
            $randstring .= $this->characters[rand(0, (strlen($this->characters) - 1))];
        }
        return $randstring;
    }
}