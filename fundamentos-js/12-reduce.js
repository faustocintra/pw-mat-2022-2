let nums = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]
let nomes = ['Aderbal', 'Joeliton', 'Neurivânia', 'Terebintina', 'Leucimara']

/*
    reduce() é um método que REDUZ um vetor a um valor singular.
    Ele faz isso aplicando uma função a cada elemento do vetor
    original, aplicando uma transformação e acumulando os resultados
    a cada passada.
*/

// reduce() para somar todos os elementos do vetor nums
let soma = nums.reduce((acumulador, elemento) => acumulador + elemento)

// reduce() para colocar em maiúsculas e concatenar com vírgulas intercaladas
// cada elemento do vetor nomes
let listaNomes = nomes.reduce((acum, el) => acum.toUpperCase() + ', ' + el.toUpperCase())

console.log({soma, listaNomes})