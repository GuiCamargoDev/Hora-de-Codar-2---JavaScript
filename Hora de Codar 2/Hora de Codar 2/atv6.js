var n1 = prompt("Digite um número");
var n2 = prompt("Digite um número");
var n3 = prompt("Digite um número");
var n4 = prompt("Digite um número");

if (n1 > n2 && n1 > n3 && n1 > n4) {
document.write("Esse é o maior número " + n1);
}
else if (n2 > n1 && n2 > n3 && n2 > n4) {
document.write("Esse é o maior número " + n2);
}
else if (n3 > n1 && n3 > n2 && n3 > n4) {
document.write("Esse é o maior número " + n3);
}
else if (n4 > n1 && n4 > n2 && n4 > n3){
document.write("Esse é o maior número " + n4);
}
document.write(". O primeiro número é " + n1 + " e o último número é " + n4);