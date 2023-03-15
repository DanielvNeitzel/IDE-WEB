<?php

$servidor = 'localhost';
$banco = '';
$usuario = 'root';
$senha = '';
$link = mysql_connect($servidor, $usuario, $senha);
$db = mysql_select_db($banco,$link);
// if($link)
// {
//     echo "conectado com sucesso!";
// }else{
// 	echo "erro ao conectar ao banco de dados!";exit();
// }

?>