$(document).ready(function(){

    $("#txtCep").focusout(function(){
        var strCep = $("#txtCep").val();
        strCep = strCep.replace("-", "");

        var strUrl = "https://viacep.com.br/ws/" + strCep + "/json/";

        $.ajax({
            url : strUrl,
            type : "GET",
            dataType : "JSON",
            success : function(objData){
                console.log(objData);
            },
            error : function(objError){
                console.log(objError);
            }
            
        });

    });

});