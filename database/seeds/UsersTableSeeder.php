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

        	'First_Name' => 'admin',
            'Last_Name' => 'admin',
            'rol_id' => 1,
        	'Email' => 'admin@gmail.com',
            'Contact_Number' => '580412304596',
        	'Password' => Hash::make(12345)

        ]);
    }

}
