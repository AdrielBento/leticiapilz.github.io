$(function($) {
  var texto =
    "“Uma fotografia é um instante de vida capturado para a eternidade”";
  var about = $("#linkAbout");

  function typeWritter(texto, idElemento, tempo) {
    var char = texto.split("").reverse();
    var typer = setInterval(function() {
      if (!char.length) return clearInterval(typer);
      var next = char.pop();
      document.getElementById(idElemento).innerHTML += next;
    }, tempo);
  }
  typeWritter(texto, "log", 100);

  function scrollPlacar() {
    var position = about.offset().top;
    console.log($("body"));
    $("body").animate(
      {
        scrollTop: "320px"
      },
      1000
    );
  }

  function oi(){
console.log("oi");
  }

  oi();
  scrollPlacar();
  //event.preventDefault();
});
