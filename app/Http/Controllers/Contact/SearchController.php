<?php

namespace App\Http\Controllers\Contact;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search($dato){
    	$contact = User::orderBy('id', 'desc')->first_name($dato)->paginate(10);

        $contact;
    }
}
