function pagecontainershow_resultado(e,ui){
	//carregar session storage
	var txtImc = sessionStorage.getItem("imc").replace('.',',');
	//alterar a tela com esse valor
	$('#txtImc').text(txtImc);	
}
