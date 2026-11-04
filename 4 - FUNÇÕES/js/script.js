// 1 - Criando uma funcção
function minhafuncao() {
    console.log ("Testando");
}

minhafuncao();
minhafuncao();

const minhaFuncaoEmVariavel = function () {
    console.log ("Função em Variavel");
}

minhaFuncaoEmVariavel();

function minhaFuncaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`);

}

minhaFuncaoComParametro ("Imprimindo alguma coisa");
minhaFuncaoComParametro ("Outro função")

// 2 - Return 

const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma (n1, n2) {
    return n1 + n2;
}

const resultado = soma (a, b);

console.log(resultado);
console.log(soma(c,d));

// 3 - Escopo da Função

let y = 10;

function testandoEscopo() {
    let y = 20;
    console.log(`Y dentro da função é: ${y}`);
}
testandoEscopo();

console.log (`Y fora da função é: ${y}`);

testandoEscopo();

