// Desestruturação de vetor
let frutas = ['laranja', 'banana', 'maçã']

// A desestruturação cria variáveis avulsas e
// atribui os elementos do vetor, EM ORDEM,
// a cada uma delas
let [fruta1, fruta2, fruta3] = frutas

console.log({fruta1, fruta2, fruta3})

// Desestruturação parcial
let [x, y] = frutas     // Primeira e segunda frutas
console.log({x, y})

let [a, , c] = frutas   // Primeira e terceira frutas
console.log({a, c})

let [, i, j] = frutas   // Segunda e terceira frutas
console.log({i, j})

/////////////////////////////////////////////////////////

// Desestruturação de objetos
let pessoa = {
    nome: 'Feicibúquisson Faria Fernandes',
    sexo: 'M',
    dataNasc: '2010-04-29',
    email: 'feicibuquisson@meta.com'
}

// Na desestruturação de objetos, as variáveis avulsas:
// 1) Precisam ter o MESMO NOME das propriedades do objeto
// 2) Podem ser especificadas em qualquer ordem
// 3) Pode ser feita a desestruturação parcial

let { sexo, nome, email } = pessoa

console.log({nome, sexo, email})