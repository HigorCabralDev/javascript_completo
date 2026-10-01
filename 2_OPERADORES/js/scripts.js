// 1 - NUMBER
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -127);

// 2- Ops. Aritméticas
console.log(1+1);
console.log(10-5);
console.log(20*5);
console.log(10/2);
console.log(5+(4*2));

// 3 - Special Number
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * "asd");
console.log(typeof NaN);

// 4 - Strings
console.log("Um texto");
console.log("Mais um texto");
console.log("21");

console.log(typeof "Um texto");
console.log(typeof "Mais um texto");

// 5 - Símbolos especiais em string

console.log ("Testando a \nquebra de linha ");

console.log ("Espaçamento \t de tab");

// 6 - Concatenação 
console.log("Oi,"+" Tudo"+" bem?");

console.log( `Testando` + ` com` + ` crase!`);

// 7 - Template Strings
console.log(`A soma de 2 + 2 é: ${2 + 2}`);

console.log (`Podemos executar qualque coisa aqui  ${console.log("Teste")}`);

// 8 - Boolean

console.log(true);

console.log(5>20);

console.log(30 > 20);

console.log(typeof false);

// 9 - Comparação 
console.log(5 <= 5);

console.log(5 < 5);

console.log (10 == 10);

console.log (10 == 9);

// 10 - Idêntico
console.log(9 == "9");

console.log(9 === "9");

console.log(9 != "9");

console.log(9 !== "9");

// 11 - Operadores Lógicos
console.log(true && true);

console.log(true && false);

console.log(5 > 2 && 2 < 10);

console.log(5 > 2 && "Mathues" === 1);

console.log(5 > 2 || "Mathues" === 1);

console.log(5 < 2 || 5 < 100);

console.log(!true);

console.log(5 > 2);

// 12 - Empty values
console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

console.log(null == false);

console.log(undefined == false);
