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

// 10 - While

let p = 0

while(p < 5 ) {
    console.log (`Repetindo ${p}`);
    p = p + 1;
}

// let x = 10 

// while(x > 5) {
//     console.log (`Imprimindo ${x}`);
// }

// 11 - DO While

let o = 10 

do {
    console.log (`Valor de o: ${o}`);
    o--
} while(o > 1);

// 12 - For 

for (let t = 0; t < 10; t++) {
    console.log ("Repetindo algo...");
}

let r = 10

for (r; r > 0; r = r -1) {
    console.log (`O r está diminuindo: ${r}`);
}

// 13 - Identação
for (let u = 0; u < 10; u++) {
    if (u * 2 > 10 ) {
    console.log(`Maior que 10! ${u}` );
    } else {
        if (u / 2 === 0) {
            console.log("deu 0!;")
        }
    }
}

// 14 - Break 
for (let g  = 20; g > 10 ; g--) {
    console.log (`O valor de g é: ${g}`);

    if (g === 12) {
        console.log ("O g é o 12!");
        break;
    }
}

// 15 - Continue
for (let s = 1; s < 10 ; s = s + 1) {
    // operado resto = %
    if (s % 2 === 0) {
        console.log ("Numero par!")
        continue
    }
    console.log (s)
}


//  16 - Switch
const job = "Asd"

switch(job) {
    case "Programador" :
        console.log ("Você é um programador");
        break
    case "Advogado":
        console.log("Você é um Advogado");
        break
    case "Engenheiro":
        console.log("Você é um Engenheiro");
        break
    default:
        console.log("Profissão não encontrada");
}

// Switch "errado"
const l = 100;

switch(l) {
    case 200:
        console.log ("L é 200!");
    case 100:
        console.log ("L é 100!");
    case 10:
        console.log ("L é 10!");
    default:
        console.log("L não foi encontrado!");
}

