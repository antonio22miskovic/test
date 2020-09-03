<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/
// rutas de autenticazion
Route::group(['prefix' => 'auth'], function ($router) {

    	Route::post('login', 'Auth\JwtController@login');
    	Route::post('logout', 'Auth\JwtController@logout');
        Route::post('refresh', 'Auth\JwtController@refresh');
    	Route::post('get-auth-user', 'Auth\JwtController@getAuthUser');
    	Route::post('register/user', 'Auth\JwtController@store');

	});


// rutas de reseteo de contraseña
Route::group(['prefix' => 'reset'], function ($router) {

	Route::post('email-vereification','Auth\ResetPasswordController@emailValidate');
	Route::post('code-verification','Auth\ResetPasswordController@ConfirmeCodigo');
	Route::post('update-password','Auth\ResetPasswordController@UpdatePassword');
	Route::post('update-code','Auth\ResetPasswordController@refreshCodigo');

});


Route::apiResource('contact','Contact\ContactController');
Route::get('search/{dato}', 'Contact\SearchController@search');