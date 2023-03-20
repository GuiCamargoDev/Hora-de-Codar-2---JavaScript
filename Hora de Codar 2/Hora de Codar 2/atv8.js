var n1 = parseFloat(prompt("Digite o primeiro número"));
var n3 = parseFloat(prompt("Digite o segundo número"));
var n2 = parseFloat(prompt("Digite o terceiro número"));
var n4 = parseFloat(prompt("Digite o quarto número"));

var resultado = 0;

if (n1 > 0 && n1 <= 10) {
    resultado = resultado + n1;
}
if (n2 > 0 && n2 <= 10) {
    resultado = resultado + n2;
}
if (n3 > 0 && n3 <= 10) {
    resultado = resultado + n3;
}
if (n4 > 0 && n4 <= 10) {
    resultado = resultado + n4;
}

resultado = resultado / 4

if (resultado >= 5) {
    document.write('Você passou no teste')
}
else if (resultado < 4.9) {
    document.write('Tente Novamente')
} 