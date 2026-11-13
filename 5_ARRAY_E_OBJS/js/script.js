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
