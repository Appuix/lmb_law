<?php
/**
 * The production database settings. These get merged with the global settings.
 */

return array(
	'default' => array(
		'connection'  => array(
			'dsn'        => 'mysql:host=127.0.0.1;dbname=fuel_prod',
			'username'   => 'root',
			'password'   => 'super_secret_password',
		),
	),
);
