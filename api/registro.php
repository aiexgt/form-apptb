<?php

	//* Validación de campos necesario
		
		//* Enlace BD
		include("./conexion.php");

		//* Recibir variables
		$nombre = $_POST['nombre'];
        $nit = $_POST['nit'];
        $departamento = $_POST['departamento'];
        $municipio = $_POST['municipio'];
        $direccion = $_POST['direccion'];
        $correo = $_POST['correo'];
        $telefono = $_POST['telefono'];


		//* Insertar datos
		$query ='INSERT INTO cliente (nombre, nit, departamento, municipio, direccion, correo, telefono) 
		VALUES("'.$nombre.'","'.$nit.'","'.$departamento.'","'.$municipio.'","'.$direccion.'","'.$correo.'","'.$telefono.'")';

		//* Ejecución Query
		if (!$result = mysqli_query($con, $query)) {
	        exit(mysqli_error($con));
	    }

		//* Imprimir datos
	    echo $result;
?>