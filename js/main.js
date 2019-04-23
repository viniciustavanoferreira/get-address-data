$(document).ready(function(){

    $("#txtCep").focusout(function(){
        var strCep = $("#txtCep").val();
        strCep = strCep.replace("-", "");

        var strUrl = "https://viacep.com.br/ws/" + strCep + "/json/";



    });

});