<html>
<meta charset="utf-8">
<head>
	<title>Excluindo...</title>
</head>
<body>

<?php 

error_reporting(0);
ini_set(“display_errors”, 0 );

include 'conexao.php';

$result = mysql_query("SELECT * FROM registros ");

while($resultado = mysql_fetch_assoc($result)){

	echo '
	<tr>
		<td>'. $resultado['id'] . '</td>
		<td>'. $resultado['nomeArquivo'] .'</td>
		<td>'. $resultado['dataArquivo'] .'</td>
		<td>'. $resultado['autorArquivo'] .'</td>
		<td>
			<div class="btn-group">
				<a href="funcoes.php?funcao=atualizar&id='.$resultado['id'].'" title="Atualizar código" class="btn btn-success fa fa-arrow-circle-down"></a>
				<a href="funcoes.php?funcao=visualizar&id='.$resultado['id'].'" title="Visualizar código" class="btn btn-warning fa fa-eye"></a>
				<a href="funcoes.php?funcao=excluir&id='.$resultado['id'].'" onclick="return confirm(\'deseja exluir o arquivo?\');" title="Excluir código" class="btn btn-danger fa fa-trash-o"></a>
			</div>
		</td>
	</tr>
	';


}

?>


</body>
</html>