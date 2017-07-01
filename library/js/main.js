$(document).ready(function(){
    $('#btnLogin').click(function(){
        var usuario = $('#txtUsuario').val();
        var senha = $('#txtSenha').val();
        
        $.post('../estudos1/controller/LoginController.php',{usuario:usuario,senha:senha},function(data){
            console.log(data);
        });
    });
    
});

