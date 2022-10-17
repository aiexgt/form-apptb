<?php
	//* Enlace BD
	include("./conexion.php");

	$data = '<option value="0">Seleccione un departamento</option>';

	$query = "SELECT id, nombre FROM departamento ORDER BY id";

	if (!$result = mysqli_query($con, $query)) {
        exit(mysqli_error($con));
    }

    // if query results contains rows then featch those rows 
    if(mysqli_num_rows($result) > 0)
    {
    	$number = 1;
    	while($row = mysqli_fetch_assoc($result))
    	{
    		$data .= '<option value="'.$row['id'].'">'.$row['nombre'].'</option>';
    	}
    }

    echo $data;
?>