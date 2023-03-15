<?php

include 'conexao.php';

if($_GET['funcao'] == "excluir"){
	$id = $_GET['id'];
	$sql_del = mysql_query("DELETE FROM registros WHERE id = '$id'");
	header('Location:index.php');
}

if($_GET['funcao'] == "atualizar"){
	$id = $_GET['id'];
	$sql_alterar = mysql_query("UPDATE registros SET nomeArquivo='$nomeArquivo', dataArquivo='$dataArquivo', autorArquivo='$autorArquivo', codigoArquivo='$codigoArquivo' WHERE id = '$id'");
	header('Location:index.php');

}

if($_GET['funcao'] == "visualizar"){
	$id = $_GET['id'];
	$sql_alterar = mysql_query("SELECT registros SET nomeArquivo='$nomeArquivo', dataArquivo='$dataArquivo', autorArquivo='$autorArquivo', codigoArquivo='$codigoArquivo' WHERE id = '$id'");
	header('Location:index.php');
}
?>