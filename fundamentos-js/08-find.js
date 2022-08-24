const numeros = [10, 19, 3, -4, 13, -11, 15, 0, -1]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']

// O método find() encontra o PRIMEIRO ELEMENTO de um vetor
// que corresponda ao retorno da função passada como parâmetro
let primeiroNegativo = numeros.find(n => n < 0)
let primeiroDiv5 = numeros.find(x => x % 5 === 0)
let comecaComM = frutas.find(f => f.charAt(0) === 'm')
let comecaComB = frutas.find(a => a.charAt(0) === 'b')  // undefined (não existe)

console.log({primeiroNegativo, primeiroDiv5, comecaComM, comecaComB})