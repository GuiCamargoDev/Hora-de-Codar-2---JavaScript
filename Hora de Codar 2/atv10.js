/*var sexo = parseFloat(prompt("Digite 1 se você for Homem ou digite 2 se você for Mulher"));
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
}*/

        function inicio() {
            let escolha = parseFloat(prompt("Selecione uma opção: \n 1 = Feminino \n 2 = Masculino"));

            switch(escolha){
                case 1:
                feminino();
                break;
                case 2:
                masculino();
                break;
                default:
                alert("Essa opção não existe");
                inicio();
            }
        }
        function feminino(){
            let altura = parseFloat(prompt("Digite a sua altura"));
            let resultado = (62.1 * altura) - 44.7;
            alert("Esse é seu peso ideal " + resultado + "kg");
        }

        function masculino(){
            let altura = parseFloat(prompt("Digite sua altura"));
            let resultado = (72.7 * altura) - 58;
            alert("Esse é seu peso ideal " + resultado + "kg");
        }
        inicio();