<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\User;
use Faker\Generator as Faker;

$factory->define(User::class, function (Faker $faker) {
    return [
    	'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'contact_number' => $faker->phoneNumber,
        'email' => $faker->unique()->safeEmail,
        'rol_id' => 2,
        'password'       => Hash::make(12345)
    ];
});
