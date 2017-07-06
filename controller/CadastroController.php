<?php

session_start();
include '../config.php';
var_dump($_POST);
$usuario = new Usuario();
$usuario->setNome($_POST['nome']);
$usuario->setSobrenome($_POST['sobrenome']);
$usuario->setEmail($_POST['email']);
$usuario->setUsuario($_POST['login']);
$usuario->setSenha($_POST['senha']);

$conexao = new ConectionFactory();

$query = new Queryes();

//$query->novoCadastro($usuario);

