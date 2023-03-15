<?php

error_reporting(0);
ini_set(“display_errors”, 0 );

include 'conexao.php';

$nomeArquivo=$_POST['nomeArquivo'];
$dataArquivo=$_POST['dataArquivo'];
$autorArquivo=$_POST['autorArquivo'];
$codigoArquivo=addslashes($_POST['codigoArquivo']);


if ($nomeArquivo !== "" || $dataArquivo !== "" || $codigoArquivo !== "") {

	if ($link) {

		$sql = mysql_query("INSERT INTO registros(nomeArquivo, dataArquivo, autorArquivo, codigoArquivo)
			VALUES('$nomeArquivo', '$dataArquivo', '$autorArquivo', '$codigoArquivo')");

		if ($sql) {
			echo "Funcionou";
			echo  "<script>alert('Cadastro cadastrado com sucesso!');</script>";
			// echo '<br>' . $sql .'<br>' . $nomeArquivo .'<br>'. $dataArquivo .'<br>'. $autorArquivo .'<br><span>'. $codigoArquivo . '</span>';
			header('location: index.php');
		}else{
			echo "Não Funcionou";
			echo  "<script>alert('Erro ao cadastrar o codigo');</script>";
			// echo '<br>' . $sql .'<br>' . $nomeArquivo .'<br>'. $dataArquivo .'<br>'. $autorArquivo .'<br><span>'. $codigoArquivo . '</span>';
			header('location: index.php');
		}

	}

}else{
	echo  "<script>alert('Verifique os campos vazios!');</script>";
	header('location: index.php');
}


?>
