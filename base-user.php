<?php
require_once("conection.php");

function searchUser($conexao,$email,$senha){

    $email = mysqli_real_escape_string($conexao,$email);// para se proteger de SQL Injection
    $query="select*from admin where email='{$email}' and senha='{$senha}'";
    $resultado = mysqli_query($conexao,$query);
    $usuario= mysqli_fetch_assoc($resultado);
    return $usuario;


}