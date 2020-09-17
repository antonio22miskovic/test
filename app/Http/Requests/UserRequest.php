<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [

            'first_name'     => 'required',
            'last_name'      => 'required',
            'email'          => 'required|unique:users|email',
        ];
    }

    public function messages()
    {
        return [

            'first_name.required'      => 'First name  required',
            'last_name.required'       => 'last name required',
            'email.required'           => 'debe introducir un email',
            'email.unique'             => 'E-mail no se encuentra disponible',
            'email.email'              => 'debe introducir un email valido',
        ];

    }
}
