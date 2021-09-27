// aqui se usa uma constante na lista de peças
const listaDePecas = ['peca de teste', 'AB', 'peca b']

//com o console.log vc impreime na tela o que está escrito em parentese
console.log('quantidade de caracteres')

// o if(se) da a condicao de q se a lista de peças for manor ou igaul a 10 as pecças podem ser cadastradas
// o .length  tem como responsabilidade retornar a quantidade de caracteres de uma string ou o tamanho de um array
if(listaDePecas.length <=10) {
    console.log('as peças podem ser cadastradas')

}

console.log('quantidade de caracteres')

//o for(para) é uma estrutura de repetição
for(let index = 0; index < listaDePecas.length; index++) {
    const pecaAtual = listaDePecas[index];
    if(pecaAtual.length < 3 ) {
        console.log(pecaAtual + ':a peça atual possui nome inferior a 3 caracteres e não pode ser cadastrada.')
    }else{
        console.log(pecaAtual + ':a peça pode se cadastrada.')
    }
}
//o comando if é o comando (se) eo else (senão)


console.log('peso da peça')


























































































const pesoDaPecaEmGramas = 50;

if(pesoDaPecaEmGramas >= 100) {
    console.log('peso suficiente.')
}else {
    console.log('valor insuficiente')
}