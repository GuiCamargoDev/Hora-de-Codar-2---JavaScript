var n1 = parseFloat(prompt("Digite o primeiro número"));
var n3 = parseFloat(prompt("Digite o segundo número"));
var n2 = parseFloat(prompt("Digite o terceiro número"));
var n4 = parseFloat(prompt("Digite o quarto número"));
var n5 = parseFloat(prompt("Digite o quinto número"));
var n6 = parseFloat(prompt("Digite o sexto número"));

var resultado = 0;

if (n1 < 72) { resultado = resultado + n1; }
if (n2 < 72) { resultado = resultado + n2; }
if (n3 < 72) { resultado = resultado + n3; }
if (n4 < 72) { resultado = resultado + n4; }
if (n5 < 72) { resultado = resultado + n5; }
if (n6 < 72) { resultado = resultado + n6; }
document.write("Primeiro número " + n1 + " <br> Segundo número " + n2 +
    "<br> Terceiro número " + n3 + "<br> Quarto número " + n4 + "<br> Quinto número " + n5 + "<br> Sexto número " + n6 +
    "<br>Esse é o resultado: " + resultado);