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

// 4 - escopo aninhado

let m = 10;

function escopoAninhado() {
    let m = 20;
    if(true) {
        let m = 30;

        if (true) {
            let m = 40;
            console.log(m);
        }

        console.log(m);

    }

    console.log(m);
}

escopoAninhado();

console.log(m);

//  5 - Arrow function

const testArrow = () => {
    console.log("Está é uma arrow function");
}

testArrow();

const parOuImpar = (n) => {
    if (n % 2 === 0){
        console.log ("Par");
        return
    }

    console.log("Impar");
};

parOuImpar(5);
parOuImpar(10);

// 6 - Mais sobre Arrow Function

const raizQuadra  = (x) => {
    return x * x;
}

console.log(raizQuadra(4));

const raizQuadra2 = (x) => x * x;

console.log(raizQuadra2(5));

console.log(raizQuadra(12));

const helloWord = () => console.log ("Hello Word");

helloWord();

// Parâmetro Opcional

const mutiplication = function (m, n) {

    if (n === undefined) {
        return m * 2;
    } else {
        return m * n;
    }
};

console.log(mutiplication(5));

console.log(mutiplication(2, 4));

const greeting = (name) => {

    if(!name) {
        console.log ("Olá!");
        return;
    }

    console.log (`Olá ${name}!`);
};

greeting();

greeting("Higor");

//  8 - Valor Defaut
const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`;
};

console.log(customGreeting("Higor"));

console.log(customGreeting("Higor", "Bom dia!"));

const repeatText = (text, repeat = 2) =>{
    for(let i = 0; i < repeat ; i++) {
        console.log(text)
    }
};

repeatText ("Testando");

repeatText("Agora repete 5 vezes", 5)

//  9 - CLOSURE

function someFunction () {
    let txt = "Alguma coisa";

    function display() {
        console.log (txt);
    }

    display();
}

someFunction();

// 10 - Mais sobre Closure
const multiplicationClosure = (n) => {
    return (m) =>{
        return n * m;
    };
};

const c1 = multiplicationClosure(5);

const c2 = multiplicationClosure(10);

console.log(c1);

console.log(c2);

console.log(c1(5));

console.log(c2(10));


