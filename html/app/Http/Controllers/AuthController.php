<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\ForgotPasswordRequest;
use Illuminate\Http\Request;
use App\Http\Requests\Auth\LoginRequest;
use App\Mail\Auth\ForgottenPasswordSendToken;
use App\User;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 
                                                    'refresh',
                                                    'forgotPassword']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(LoginRequest $request)
    {
        $request->validated();
        
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Wrong Email or Password'], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        $user_id = auth()->user()->id;
        $response_data = User::where('id', $user_id)->select('id', 'company_id', 'role_id')->first();
        //                        with(['company' => function($q){
        //                            $q->select('id');
        //                        }])->
        //                        with(['role' => function($q){
        //                            $q->select('id');
        //                        }])->first();
        return response()->json($response_data);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    public function forgotPassword(ForgotPasswordRequest $forgotPasswordRequest) {
        $forgotPasswordRequest->validated();

        $user = User::where('email', $forgotPasswordRequest->email)->first();
        $userInstance = User::find($user->id);

        $updateData = [
            'forgot_password_token' => bin2hex(random_bytes(12)),
        ];

        $result = $userInstance->update($updateData);

        if($result) {
            $restoreLink = $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] . '/restore-password?email=' . $userInstance->email . '&token=' . $updateData['forgot_password_token'];

            $sendData = [
                'user' => $userInstance,
                'restore_link' => $restoreLink,
            ];
            
            Mail::to($userInstance->email)->send(new ForgottenPasswordSendToken($sendData));
        }


        return $result;
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 180
        ]);
    }
}
