<?php
session_start();

function LoginUser($email,$nome)
{
    $_SESSION["loginUser"] = $email;
    $_SESSION["nome"] = $nome;
    
}

function VerifyUser(){
    if(!isset($_SESSION["loginUser"])){

    };

}

function UserLoggedIn(){

   return $_SESSION["loginUser"];
   
}