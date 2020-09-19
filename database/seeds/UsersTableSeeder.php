<?php

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([

        	'first_name'     => 'admin',
            'last_name'      => 'admin',
            'rol_id'         => 1,
        	'email'          => 'admin@gmail.com',
            'contact_number' => '580412304596',
        	'password'       => Hash::make(12345)

        ]);

        // factory(User::class,100)->create();
    }

}
