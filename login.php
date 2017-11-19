<?php
require_once("base-user.php");
require_once("logic-user.php");

$usuario = searchUser($conexao,$_POST["email"],$_POST["password"]);
$response = new stdClass();;

if($usuario == null){
   
    $response->result = '0';
    $response->msg = 'Usuario Invalido: email ou senha invalida';


}else{
    LoginUser($usuario["email"],$usuario['nome']);
    $response->result = '1';
    $response->msg = 'Usuario Logado';
    $response->nome = $usuario['nome'];
}
$responseJSON = json_encode($response);
echo $responseJSON;


