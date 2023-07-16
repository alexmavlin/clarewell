<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\StoreRequest;
use Illuminate\Support\Facades\Hash;
use App\User;

class RegisterController extends Controller
{
    public function __invoke(StoreRequest $request)
    {
        $data = $request->validated();

        $data['password'] = Hash::make($data['password']);

        $user = User::where('email', $data['email'])->first();
        if($user) return response(['message' => 'User with this email already exists.'], 403);
        $data['role_id'] = 2;

        $user = User::create($data);
        $token = auth()->tokenById($user->id);
        return (['access_token' => $token]);
    }
}
