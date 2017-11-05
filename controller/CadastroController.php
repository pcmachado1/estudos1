<?php

session_start();
include '../config.php';

$usuario = new Usuario();
$usuario->setNome($_POST['nome']);
$usuario->setSobrenome($_POST['sobrenome']);
$usuario->setEmail($_POST['email']);
$usuario->setUsuario($_POST['login']);
$usuario->setSenha($_POST['senha']);

$conexao = new ConectionFactory();

$query = new Queryes();
//var_dump($usuario);

$result1 = $conexao->getConectionLocal()->query($query->getIdNewUser($usuario));

//print_r($result1->fetchAll());
//echo $result1->rowCount();
if($result1->rowCount() != 0){
    echo "Usuario Existe no sistema";
}else{
   //echo $query->novoCadastro($usuario);

    $result = $conexao->getConectionLocal()->query($query->novoCadastro($usuario));
    
    $result->fetchAll();

    //echo $query->getIdNewUser($usuario);

    $result1 = $conexao->getConectionLocal()->query($query->getIdNewUser($usuario));
    
    $arrayNewUser = $result1->fetchAll(); 
    
    echo $arrayNewUser[0][0];
    
    $usuario->setId($arrayNewUser[0][0]);
    
    $result2 = $conexao->getConectionLocal()->query($query->perfilInicial($usuario));
    
    $result2->fetchAll();
    
    
}
