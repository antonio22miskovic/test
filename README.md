	<li>sudo chmod -R 777 test</li>
	<li>cd test</li>
	<li>composer install</li>
	<li>cp .env.example .env</li>
	<li>php artisan key:generate</li>
	<li>composer update</li>
	<li>php artisan cache:clear && php artisan config:cache && php artisan config:clear</li>
	<li>php artisan jwt:secret</li>
	<li>From the console(using MySql) you could do something similar to this<br/>
	mysql -uroot -psecret</li>
	<li>CREATE DATABASE your_data_base;</li>
	<li>Later you must add the credentials to the file.env<br/>
	DB_HOST=localhost<br/>
	DB_DATABASE=tu_base_de_datos<br/>
	DB_USERNAME=root<br/>
	DB_PASSWORD=tu-contraseña</li>
	<li>php artisan migrate</li>
	<li>php artisan db:seed</li>
	<li>npm install</li>
	<li>npm run dev</li>
	<li>npm artisan serve</li>
</ul>
<span>
	<p>
		puedes ingresar al sistema con el siguiente usuario:
	</p>
	<ul>
		<li>
			correo:
			admin@gmail.com
		</li>
		<li>
			clave: 12345
		</li>
	</ul>
</span>
<small style="text-align: center;">
	Ramon Villalobos<br/>
	2020
</small>