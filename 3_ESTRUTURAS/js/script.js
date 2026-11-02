// 1 - Variáveis
let nome = "Higor";

console.log(nome);

console.log("Higor");

const idade = 21;

console.log(idade);

// idade = 21;

console.log(typeof nome)

console.log(typeof idade)

// 2 - Mais sobre Variáveis
// let 2teste = "inválido"
// let @teste = "inválido"

let a = 10,
b = 20,
c= 30

console.log(a, b, c);

const nomecompleto = "Higor Cabral"

const nomeCompleto = "Higor Fernandes"

console.log(nomecompleto);

console.log(nomeCompleto);

let _teste = "ok"

let $teste = "ok"

console.log(_teste, $teste)

// // 3 - Prompt

//  const age = prompt("Digite a sua idade:");
//  console.log(`Você tem ${age} anos.`);

// // 4 - Alert
// alert("Testando");

// const z = 10;

// alert(`O número é ${z}`);

// 5 - Math
console.log(Math.max (5,2,3,4,10));

console.log(Math.floor (5,14));

console.log(Math.ceil (5,14));

// 6 Console

console.log("Testando")

console.error("Erro!")

console.warn("Aviso!")

// 7 - IF

const m = 10;

if (m > 5) {

    console.log("M é maior que 5!")
}

const user = "João"

if(user === "João") {

    console.log("Ola João!");
}

if(user === "Maria") {
    console.log("Olá Maria!")
}

console.log (user === "João", user === "Maria")

// 8 - ELSE

const loggedIn = false

if (loggedIn) {

    console.log("Está autenticado!");
} else {
    console.log("Não está autenticado!");
}

const q = 10 

const w = 15

if (q > 5 && w > 20 ) {
    console.log ("Número mais altos");
} else {
    console.log ("Os números não estão mais altos");
}

// 9 Else If

if (1 > 2) {
    console.log("Teste");
} else if (2 > 3) {
    console.log("Teste 2");
} else if (5 > 1) {
    console.log("Agora sim!");
}

const userName = "Matheus"
const userAge =  31

if(userName === "Jóse") {
    console.log ("Bem vindo Jóse!");
} else if (userName === "Matheus" && userAge === 31) {
    console.log ("Olá Matheus, você tem 31 anos!");
} else {
    console.log ("Nenhuma condição aceita");
}
