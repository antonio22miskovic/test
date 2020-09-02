<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class JwtController extends Controller
{

	 /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('jwt.init', ['except' => ['login','store']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    { // funcion para crear el token eh iniciar session

        $credentials = request(['Email', 'Password']);
        $token = JWTAuth::attempt($credentials);
        return !$token ? response()->json(['error' => 'Not Autorization'],400) :
                         response()->json(['access_token' => $token,
                                  'user' => User::find(Auth::user()->id),
                                  'token_type' => 'bearer',],200);

    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
     public function getAuthUser()
     { // obtener el usuario logeado

        try {

            $user = JWTAuth::parseToken()->authenticate();
            return  response()->json(['user' => $user,'status' => 200],200);

        } catch (JWTException $e) {

            return  response()->json(['mensaje' => $e,'status' => 500],500);

        }

    }
    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        $newToken = JWTAuth::parseToken()->refresh();
        return response()->json($newToken);
    }

      /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {// destruir session
        try {

            JWTAuth::parseToken()->invalidate();
              return response()->json(['mensaje' => 'session it is over ','confirmation' => true],200);

        } catch (JWTException $e) {
              return  response()->json(['mensaje' => $e, 'status' => 500],500);
        }

    }

    public function store(UserRequest $request)
    {// registro de usuario
        try {
        $user = User::create([
                'First_Name' => $request['First_Name'],
                'Last_Name' => $request['Last_Name'],
                'Contact_Number' => $request['Contact_Number'],
                'Email' => $request['Email'],
                'Password' => Hash::make($request['Password'])
            ]);
            return response()->json(['message' => 'user register succefull', 'user' => $user],200);
        } catch (Exception $e) {
            return response()->json(['message' => 'there is a error', 'error' => $e],500);
        }

    }

}
