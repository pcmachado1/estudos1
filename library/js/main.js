$(document).ready(function(){
    $('#btnLogin').click(function(){
        var usuario = $('#txtUsuario').val();
        var senha = $('#txtSenha').val();
        
        $.post('../estudos1/controller/LoginController.php',
                {usuario:usuario,senha:senha},
                function(data){
                        console.log(data);
                        
                       if(data == 'true'){
                          console.log('usuario logado com sucesso');
                          location.assign('/estudos1/?page=welcome');
                       }else{
                          console.log('Nao foi possivel logar');  
                       }
                                }
                );
    });
    
    
    
});
function loadWelcome(){
    $.post('../estudos1/controller/WelcomeController.php',{},function(data){
        //console.log("retorno: "+data);
        var jsonObject = JSON.parse(data);
        $('#welcome').html('Welcome Back '+jsonObject[0].nome+" "+jsonObject[0].sobrenome);
    });
}
function loadUsers(){
    $.post('../estudos1/controller/UsuariosController.php',{},function(data){
        var jsonObject = JSON.parse(data);
        for(i=0;i<jsonObject.length;i++){
            console.log(jsonObject[i].nome);
            $('#usersTable').append("<tr><td>"+jsonObject[i].nome+"</td>"+
                                        "<td>"+jsonObject[i].sobrenome+"</td>"+
                                        "<td>"+jsonObject[i].email+"</td>"+
                                        "<td>"+jsonObject[i].sobrenome+"</td>"+
                                        "</tr>"
                    );
        }
    });
}    

