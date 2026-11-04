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