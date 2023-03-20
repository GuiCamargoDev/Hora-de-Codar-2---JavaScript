var n1 = parseFloat(prompt("Digite um número"));
var n2 = parseFloat(prompt("Digite um número"));
var n3 = parseFloat(prompt("Digite um número"));

if (n1 < n2 && n1 < n3) {
    document.write(" A soma do segundo número " + n2 + " e do terceiro número " + n3 + " é " + (n2 + n3))
}
else if (n2 < n1 && n2 < n3) {
    document.write(" A soma do primeiro número " + n1 + " e do terceiro número " + n3 + " é " + (n1 + n3))
}
else if (n3 < n1 && n3 < n2) {
    document.write(" A soma do primeiro número " + n1 + " e do segundo número " + n2 + " é " + (n1 + n2))
}