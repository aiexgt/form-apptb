<?php
$host = "34.133.217.8"; //* dominio
$user = "root"; //* usuario bd
$password = "Jlima189"; //* contraseña bd
$database = "rd-tb"; //* segmento o base de datos

//* Conectando la base de datos
$con = new mysqli($host, $user, $password, $database);
$con->set_charset("utf8");

//* Resultado conexión
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

?>