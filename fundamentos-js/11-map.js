let nums = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]
let nomes = ['Aderbal', 'Joeliton', 'Neurivânia', 'Terebintina', 'Leucimara']

/*
    O método map() gera um NOVO VETOR, de tamanho idêntico ao vetor original,
    em que cada elemento corresponde a uma transformação feita no elemento
    original pela função passada como parâmetro
*/

// map() que cria um novo vetor de números cujo valor é o dobro
// do valor dos elementos do vetor original
let dobro = nums.map(x => x * 2)

// map() que transforma os elementos do vetor original em itens de lista
// para uso em HTML, por exemplo
let itensLista = nomes.map(n => `<li>${n}</li>`)

console.log({dobro})
console.log({itensLista})