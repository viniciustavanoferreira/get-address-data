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
                $("#txtCidade").val(objData.localidade);
                $("#txtEstado").val(objData.uf);
                $("#txtBairro").val(objData.bairro);
                $("#txtRua").val(objData.logradouro);
                $("#txtComplemento").val(objData.complemento);
                
            },
            error : function(objError){
                console.log(objError);

            }
            
        });

    });

});