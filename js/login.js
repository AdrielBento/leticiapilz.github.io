$(function($) {
  // executa a funcao quando o DOM estiver carregado

  var form = $("#loginForm"); // pega o formulario
  var msgRepost = $("#repostLogin");
  var form2 = new FormData($(this)[0]);
  var button = $("#logar");

  msgRepost.hide();

  button.click(function() {
    event.preventDefault();
 
    var formData = $("#loginForm");
    var emailUser = $("#email").val(); // pega o email
    var senhaUser = $("#password").val(); // pega a senha

    $.ajax({
      url: "login.php",
      method: "POST",
      //data: { email: "adrielbb15@hotmail.com", senha: "Gabiruru" },
      data: formData.serialize(),

      success: function(answer) {
        answer = $.parseJSON(answer);

        if (answer.result == "1") {
          msgRepost.text("Bem Vindo " + answer.nome);
          msgRepost.addClass("successLogin");
          msgRepost.fadeIn();
          setInterval(function() {
            location.href = "profile.html";
          }, 1500);
        } else if (answer.result == "0") {
          msgRepost.text(answer.msg);
          msgRepost.addClass("erroLogin");        
          msgRepost.fadeIn();
        }
      },
      error: function() {
        alert("Erro na coneçao");
      }
    });

    return false;
  });

  var form = $("#loginForm");
});
