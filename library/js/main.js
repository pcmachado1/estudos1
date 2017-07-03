$(document).ready(function(){
    $('#btnLogin').click(function(){
        var usuario = $('#txtUsuario').val();
        var senha = $('#txtSenha').val();
        
        $.post('../estudos1/controller/LoginController.php',
                {usuario:usuario,senha:senha},
                function(data){
                        
                        
                       if(data == 'true'){
                          console.log('usuario logado com sucesso');
                          location.assign('../view/welcome.html');
                       }else{
                          console.log('Nao foi possivel logar');  
                       }
                                }
                );
    });
    
});

