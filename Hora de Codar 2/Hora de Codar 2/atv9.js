var ano_de_nascimento = prompt("Digite o ano que você nasceu");
var resultado = 2023 - ano_de_nascimento;

if (resultado < 16) {
    document.write("Você não pode votar");
} else if (resultado >= 16) {
    document.write("Você pode votar");
}