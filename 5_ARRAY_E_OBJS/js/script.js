// 1 - Array
const lista = [1, 2, 3 ,4, 5];

console.log(lista);

console.log(typeof lista);

const itens = ["Higor", true, 2,4, 12, []];

console.log(itens);

// 2 - Mais sobre Arrays
const arr = ["a", "b", "c", "d"];

console.log (arr[0]);

console.log(arr [2]);

console.log (arr [53]);

// 3 - Propriedades
const numbers = [5, 3, 4];

console.log (numbers.length);

console.log(numbers["length"]);

const myName = "Higor";

console.log(myName.length);

// 4 - Métodos
const otherNumbers = [1,2,3];

const allNumbers = numbers.concat(otherNumbers);

console.log (allNumbers);

const text = "Algum texto";

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase());

console.log(text.indexOf("t"));

// 5 - Objetos 
const person = {
    name: "Higor",
    age: 21,
    job: "Programador"
};

console.log(person);

console.log(person.name);

console.log(person.name.length);

// Criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km:20000,
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);

// 7 -  Mais sobre objetos 
const obj = {
    a: "Teste",
    b: true,

};

console.log(obj instanceof Object)

const obj2 = {
    c: [],
}

Object.assign(obj2,obj);

console.log(obj2);

console.log(obj);

// 8 - Conhecendo melhor os objeto
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// 9 - Mutação
const a = {
    name: "Higor",
};

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 21;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

//  10 - Loop em array
const users = ["Higor", "Matheus", "José", "Yure"];

for(let i = 0; i < users.length; i++){
    console.log(`Listando o usuário: ${users[i]}`);
}

// 11 - push e pop 
const array = ["a", "b", "c"]

array.push("d");

console.log(array);

console.log(array.length);

array.pop();

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);

console.log(array);

array.push("z", "x", "y");

console.log(array);

// 12 - Shift e unshift
const letters = ["a", "b", "c"]

const letter = letters.shift();

console.log(letter);

console.log(letters);

letters.unshift("p", "q", "r");

letters.unshift("z");

console.log(letters);

// 13 - IndexOf e LastindexOf
const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));
console.log(myElements.indexOf("Mamão"));
console.log(myElements.lastIndexOf("Mamão"));

// 14 - Slice
const testeSlice = ["A", "B", "C", "D", "E", "F"];

const subArray = testeSlice.slice(2,4);

console.log(subArray);

console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4 + 1);

console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20)

console.log(subArray3);

const subArray4 = testeSlice.slice(2)

console.log(subArray4);

// 15 - Forech
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
    console.log(`O número é ${numero}`);
})

const posts = [
    {title: "Primeiro post", category:"PHP"},
    {title: "Segundo post", category:"JavaScript"},
    {title: "Teceiro post", category:"Python"},
];

posts.forEach((post) => {
    console.log(`Exibindo o primeiro post:${post.title}, da categoria: ${post.category}`);
    
});

// 16 - Includes
const brands = ["BMW", "VW", "FIAT"]

console.log(brands.includes("FIAT"));

console.log(brands.includes("KIA"));

if(brands.includes("BMW")) {
    console.log("Há carros da marca BMW!");
};


// 17 - Reverse 
const reverseTeste = [ 1, 2, 3, 4 , 5];

reverseTeste.reverse();

console.log(reverseTeste)

//  18 - Trim 
const trimTest = "  testando \n  ";

console.log(trimTest);

console.log(trimTest.trim());

console.log(trimTest.length);

console.log(trimTest.trim().length);

// 19 - padStart
const testePadStart = "1";

const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);

console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");

console.log(testePadEnd);





