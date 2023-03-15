<?php 

function salvar($dados, $arquivo){
	$myfile = fopen("../{$arquivo}", "w") or die("Unable to open file!");
	$txt = $dados;
	fwrite($myfile, $txt);
	fclose($myfile);
	return json_encode(array( 'sucesso'=>true, 'dados'=>'Arquivo salvo com sucesso!'));
}


if ($_POST['acao'] === 'salvar' ) {
	echo salvar($_POST['dados'],$_POST['arquivo']);

}


?>