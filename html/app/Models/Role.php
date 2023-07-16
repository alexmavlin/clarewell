<?php

namespace App\Models;
use App\User;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $table = 'roles';
    protected $guarded = false;

    public function users() {
        return $this->hasMany(User::class, 'role_id');
    }
}
