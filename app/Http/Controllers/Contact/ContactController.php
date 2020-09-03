<?php

namespace App\Http\Controllers\Contact;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Mail\EmailContact;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{

    public function __construct()
    {
        $this->middleware('jwt.admin');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $contact = User::orderBy('id', 'desc')->where('rol_id',2)->paginate(10);

         return [

            'paginate' => [

                'total' => $contact->total(),
                'current_page' => $contact->currentPage(),
                'per_page' => $contact->perPage(),
                'last_page' => $contact->lastPage(),
                'from' => $contact->firstItem(),
                'to' => $contact->lastPage(),

            ],

           'contact' => $contact

        ];

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
       $contact = User::create([

            'first_name' => $request['first_name'],
            'last_name' => $request['last_name'],
            'contact_number' => $request['contact_number'],
            'email' => $request['email'],
            'rol_id' => 2

        ]);

           Mail::to($contact->email)->send(new EmailContact());
           return true;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $contact = User::find($id);
        if (is_null($contact)) {
            return response()->json('contact not found',400);
        }
        $contact->update($request->all());
        return response()->json('updated contact',200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

      $contact = User::find($id);
        if (is_null($contact)) {
            return response()->json('contact not found',404);
        }
        $contact->delete();
        return response()->json(true,200);

    }
}
