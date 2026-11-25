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
