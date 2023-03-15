//  Informações que serão prcessadas na função.

var txt_html_simples="<!DOCTYPE html>\n"+
"<html>\n"+ 
" <head>\n"+
"  <title>Page Title</title>\n"+
" </head>\n"+
"   <body>\n\n"+

"     <h1>This is a Heading</h1>\n"+
"     <p>This is a paragraph.</p>\n\n"+

"   </body>\n"+
"</html>";

// *****************************************************************

var txt_bootstrap='<!DOCTYPE html>\n'+
'<html lang="en">\n'+
'<head>\n'+
'  <title>Bootstrap Example</title>\n'+
'  <meta charset="utf-8">\n'+
'  <meta name="viewport" content="width=device-width, initial-scale=1">\n'+
'  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">\n'+
'  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>\n'+
'  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>\n'+
'</head>\n'+
'<body>\n'+

'<div class="container-fluid">\n'+
'  <h1>Hello World!</h1>\n'+
'  <p>Resize the browser window to see the effect.</p>\n'+
'  <div class="row">\n'+
'    <div class="col-sm-4" style="background-color:lavender;">.col-sm-4</div>\n'+
'    <div class="col-sm-4" style="background-color:lavenderblush;">.col-sm-4</div>\n'+
'    <div class="col-sm-4" style="background-color:lavender;">.col-sm-4</div>\n'+
'  </div>\n'+
'</div>\n\n'+

'</body>\n'+
'</html>';

// *****************************************************************

var txt_jquery_mobile='<!DOCTYPE html>\n'+
'<html>\n'+
'<head>\n'+
'<meta name="viewport" content="width=device-width, initial-scale=1">\n'+
'<link rel="stylesheet" href="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">\n'+
'<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>\n'+
'<script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>\n'+
'</head>\n'+
'<body>\n\n'+

'<div data-role="page">\n'+
'  <div data-role="header">\n'+
'    <h1>Welcome To My Homepage</h1>\n'+
'  </div>\n\n'+

'  <div data-role="main" class="ui-content">\n'+
'    <p>I Am Now A Mobile Developer!!</p>\n'+
'  </div>\n\n'+

'  <div data-role="footer">\n'+
'    <h1>Footer Text</h1>\n'+
'  </div>\n'+
'</div>\n\n'+

'</body>\n'+
'</html>';

// Funções para copiar e colar conteudo no textarea.

function carregaHTML(){
	$('#textareaCode').val(txt_html_simples);
	$('#menuTemplates').modal('hide');
	alertify.set('notifier','position', 'bottom-left');
	alertify.warning('Criado código HTML.');
	submitTryit();
}

function carregaBootStrap(){
	$('#textareaCode').val(txt_bootstrap);
	$('#menuTemplates').modal('hide');
	alertify.set('notifier','position', 'bottom-left');
	alertify.warning('Criado código BootStrap.');
	submitTryit();
}

function carregaJqueryMobile(){
	$('#textareaCode').val(txt_jquery_mobile);
	$('#menuTemplates').modal('hide');
	alertify.set('notifier','position', 'bottom-left');
	alertify.warning('Criado código Jquery Mobile.');
	submitTryit();
}

// FUnção para alternar layout do editor.

function apagarLuz(){
	$('#textareaCode').toggleClass("darkmode-txtarea");
	$('#container').toggleClass("darkmode-content");
	$('#opts-bar').toggleClass("darkmode-content");
	$('.modal-content').toggleClass("darkmode-modal");
	$('.box').toggleClass("darkmode-txtarea");
}

// Funções para tecla de atalho.


$(window).bind('keydown', function(event) {
	if (event.ctrlKey || event.metaKey) {
		switch (String.fromCharCode(event.which).toLowerCase()) {
			case 's':
			event.preventDefault();
			var salvando = salvarArquivo();
			if (salvando.sucesso === true) {
				// alert(salvando.dados);
			}
			break;
		}
	}
});

$(window).bind('keydown', function(event) {
	if (event.ctrlKey || event.metaKey) {
		switch (String.fromCharCode(event.which).toLowerCase()) {
			case 'o':
			event.preventDefault();
			$("#menuAbrirArquivo").modal();
			break;
		}
	}
});

$(window).bind('keydown', function(event) {
	if (event.ctrlKey || event.metaKey) {
		switch (String.fromCharCode(event.which).toLowerCase()) {
			case 'q':
			event.preventDefault();
			$("#menuNovoArquivo").modal();
			break;
		}
	}
});


$("#chamadaCodigo").click(function(){

	var url = "cadastrando.php";

	$.post(url, function(result) {
       	$("#resposta").html("Resultado do PHP: " + result);
   	});

});
