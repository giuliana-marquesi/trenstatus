function pagecontainershow_main(e,ui){
	
	//document.addEventListener("deviceready", onDeviceReady, false);
}

function calcular(){
	//ler dados dos inputs
	var txtAltura = $('#txtAltura').val();
	var txtPeso = $('#txtPeso').val();
	//calcular a formula do IMC
	var altura = parseFloat(txtAltura);
	var peso = parseFloat(txtPeso);
	if(altura < 2.5 && altura > 1){
		if(peso < 600 && peso > 25){
			$.mobile.pageContainer.pagecontainer("change", "resultado.html");
		} else {
			alert("Valor inválido, colocou " + peso +"\nInsira um peso entre 25 e 600");	
		}
	} else {
		alert("Valor inválido, colocou " + altura +"\nInsira uma altura entre 1 e 2,5");
	}
	var imc = peso/(altura*altura).toFixed(2);
	imc = imc.toFixed(2);
	//salvar no sessionstorage
	sessionStorage.setItem("imc", imc.toString() );
   //navegar para a próxima página

	
}
//http://meumobi.github.io/stocks%20apis/2016/03/13/get-realtime-stock-quotes-yahoo-finance-api.html
