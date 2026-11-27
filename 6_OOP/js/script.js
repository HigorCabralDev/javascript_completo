// 1 - Métodos
const animal = {
    nome: "Bob",
    latir: function(){
        console.log("Au au");
    },
};

console.log(animal.nome);

animal.latir();

// 2 - Aprofundando em métodos
const pessoa = {
    nome: "Higor",

    getNome: function(){
        return this.nome;
    },

    setNome: function(novoNome){
        this.nome = novoNome;
    }
}

console.log(pessoa.nome);

console.log(pessoa.getNome());

pessoa.setNome("Matheus");

console.log(pessoa.getNome());

// 3 - Propotype
const text = "ASD"

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(arr.length);

console.log(Object.getPrototypeOf(arr));

// 4 - Mais sobre prototype
const myObject = {
    a: "b",
};

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype)

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject) === myObject)

// 5 - Classes Básicas 

const cachorro = {
    raca: null,
    patas: 4,

};

const pastorAlemao = Object.create(cachorro)

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao);

console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro)

bulldog.raca = "Bulldog";

console.log(bulldog);

// 6 - Função com classe - Função Construtora
function criarCachorro (nome, raca) {
    const cachorro   = Object.create({})

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}

const bob = criarCachorro("Bob", "Vira lata");

console.log(bob);

const jack = criarCachorro("Jack", "Poodle");

console.log(jack);

console.log(Object.getPrototypeOf(jack))

// 7 - Funçõe como classe 
function Cachorro (nome, raca) {
    this.nome = nome;
    this.raca = raca;
};

const husky = new Cachorro ("Ozzy", "Husky");

console.log(husky);

// 8 - Métodos na função construtora
Cachorro.prototype.uivar = function(){
    console.log("Auuuuuuuuuuuu!");
};

console.log(Cachorro.prototype);

husky.uivar();

