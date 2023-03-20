function inicio() {

    if (escolha === 1) {
        adicao();
    } else if (escolha === 2) {
        subtracao();
    }
    else if (escolha === 3) {
        multiplicacao();
    }
    else if (escolha === 4) {
        divisao();
    }
}

var n1 = parseInt(prompt("Insira um Numero inteiro: "));
var n2 = parseInt(prompt("Insira um Numero inteiro: "));
var operacao = parseInt(prompt('Selecione uma opção: \n 1 - Adição \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão'));

var resultado;

switch (operacao) {
    case 1:
        resultado = n1 + n2;
        break;

    case 2:
        resultado = n1 - n2;
        break;

    case 3:
        resultado = n1 * n2;
        break;

    case 4:
        resultado = n1 / n2;
        break;

    default:
        alert("Operação Invalida!")
}

alert("O Resultado é: " + resultado)