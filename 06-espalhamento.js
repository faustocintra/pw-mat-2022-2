// let minimo = Math.min(2, -7, 8, 4, 0)
// let maximo = Math.max(2, -7, 8, 4, 0)

let nums = [2, -7, 8, 4, 0]     // Vetor de números

// let minimo = Math.min(nums)     // NÃO FUNCIONA
// let maximo = Math.max(nums)     // NÃO FUNCIONA

// A sintaxe de espalhamento (spreading) é capaz de
// "desempacotar" um vetor em uma lista de valores avulsos
let minimo = Math.min(...nums)
let maximo = Math.max(...nums)

console.log({minimo, maximo})

console.log('Vetor "empacotado":', nums)
console.log('Vetor "espalhado": ', ...nums)

////////////////////////////////////////////////////////////////

let carro1 = { modelo: 'Fiorino', marca: 'Fiat', ano: 1984, cor: 'bege' }

// Copiando carro1 para carro2
// let carro2 = carro1     // NÃO FUNCIONA

// É necessário usar a sintaxe de espalhamento para obter
// uma cópia efetiva do objeto
let carro2 = { ...carro1 }

carro2.marca = 'Chevrolet'
carro2.modelo = 'Opala'
carro2.cor = 'preto'
carro2.ano = 1979

console.log({carro1, carro2})

/////////////////////////////////////////////////////////////////////////

let frutas = ['maçã', 'banana', 'laranja']
let verduras = ['alface', 'couve', 'rúcula']
// Vetor que contém tanto verduras quanto frutas
// let hortifruti = frutas + verduras   // NÃO FUNCIONA
// let hortifruti = frutas.concat(verduras)    // JS clássico, FUNCIONA
// Usando espalhamento e JS moderno
let hortifruti = [ ...frutas, ...verduras ] 

console.log({hortifruti})