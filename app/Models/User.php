<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [

        'first_name',
        'last_name',
        'contact_number',
        'email',
        'password',

    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

     //funciones para jwt
    public  function  getJWTIdentifier() {
        return  $this->getKey();
    }
    public  function  getJWTCustomClaims() {
        return [];
    }
    // fin funciones para jwt

      // Scope
    public function scopeFirst_name($query, $first_name)
    {
        if($first_name){
            return $query->where('first_name', 'LIKE', "%$first_name%");
        }
    }

     // Scope
    public function scopeLast_name($query, $last_name)
    {
        if($last_name){
            return $query->where('Last_name', 'LIKE', "%$last_name%");
        }
    }

    // Scope
    public function scopeContact_number($query, $contact_number)
    {
        if($contact_number){
            return $query->where('contact_number', 'LIKE', "%$contact_number%");
        }
    }

    // Scope
    public function scopeEmail($query, $email)
    {
        if($email){
            return $query->where('email', 'LIKE', "%$email%");
        }
    }


}
