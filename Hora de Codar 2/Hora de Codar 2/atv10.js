var sexo = parseFloat(prompt("Digite 1 se você for Homem ou digite 2 se você for Mulher"));
var altura = parseFloat(prompt("Digite sua altura"));
var resultado_homem = 0;
var resultado_mulher = 0;

if (sexo = 1) {
resultado_homem = (72.7 * altura) - 58
document.write("Sua peso ideal é " + resultado_homem);
}
else if (sexo = 2) {
resultado_mulher = (62.1 * altura) - 44.7
document.write("Sua peso ideal é " + resultado_mulher);
}