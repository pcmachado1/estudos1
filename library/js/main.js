$(document).ready(function(){
    $('#txtUsuario').change(function(){
        var usuario = $('#txtUsuario').val();
        if(usuario == ""){
           $("#errorUser").html("Favor Preencher o Campo"); 
           console.log("Favor Preencher o Campo");
           event.preventDefault();
        }else{
           $("#errorUser").html(""); 
           console.log("Campo limpo");
        }
    });
    $('#txtSenha').change(function(){
        var senha = $('#txtSenha').val();
        if(senha== ""){
           $("#errorPass").html("Favor Preencher o Campo"); 
           console.log("Favor Preencher o Campo");
           event.preventDefault();
        }else{
           $("#errorPass").html(""); 
           console.log("Campo limpo");
        }
    });
    $('#btnLogin').click(function(){
        var usuario = $('#txtUsuario').val();
        var senha = $('#txtSenha').val();
        if(usuario == '' || senha == ''){
            if(usuario==''){
                $("#errorUser").html("Favor Preencher o Campo");
                console.log('erroUser');
                event.preventDefault();
            }
            if(senha==''){
                $("#errorPass").html("Favor Preencher o Campo");
                console.log('erroPass');
                event.preventDefault();
            }
        }else{
        
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
        }
    });
    $('#btnCadastro').click(function(){
        var objectCadastro = $('input');
        console.log("nome"+objectCadastro[0].value);
        console.log("sobrenome"+objectCadastro[1].value);
        console.log("email"+objectCadastro[2].value);
        console.log("login"+objectCadastro[3].value);
        console.log("senha"+objectCadastro[4].value);
        
        $.post('../estudos1/controller/CadastroController.php',
            {nome:objectCadastro[0].value,
             sobrenome:objectCadastro[1].value,
             email:objectCadastro[2].value,
             login:objectCadastro[3].value,
             senha:objectCadastro[4].value
            },function(data){
                console.log(data)
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
            $('#usersTable').append("<tr>"+
                                        "<td><img src=images/"+jsonObject[i].image+" class=\"img-thumbnail\" width=\"50px\" heigth=\"50px\" /></td>"+
                                        "<td>"+jsonObject[i].nome+"</td>"+
                                        "<td>"+jsonObject[i].sobrenome+"</td>"+
                                        "<td>"+jsonObject[i].email+"</td>"+
                                        "<td>"+jsonObject[i].sobrenome+"</td>"+
                                        "</tr>"
                    );
        }
    });
}
function location(){
    // Create a new map that is immediately displayed on the web page
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: new google.maps.LatLng(54, 12),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    });
    
    console.log(map);
}

