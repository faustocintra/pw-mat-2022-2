const numeros = [10, 19, 3, -4, 13, -11, 15, 0, -1]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']

/*
    O método filter() cria um NOVO VETOR contendo apenas os elementos
    do vetor de origem que atendam ao critério da função passada como
    parâmetro
*/
let negativos = numeros.filter(i => i < 0)
let divs5 = numeros.filter(n => n % 5 === 0)
let comecaComM = frutas.filter(a => a.charAt(0) === 'm')
let comecaComJ = frutas.filter(x => x.charAt(0) === 'j')
let comecaComB = frutas.filter(f => f.charAt(0) === 'b')    // vetor vazio []

console.log({negativos, divs5, comecaComM, comecaComJ, comecaComB})