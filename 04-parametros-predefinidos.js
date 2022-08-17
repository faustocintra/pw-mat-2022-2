/*
    Função que calcula a área de diferentes formas geométricas
*/

// Nesta função, o parâmetro "forma" tem um valor predefinido: 'R'.
// Assim, caso este parâmetro não seja informado, o valor 'R' será
// usado. Se o parâmetro for informado, valerá o valor passado.
function calcular_area(base, altura, forma = 'R') {
    switch(forma) {
        case 'R':   // Retângulo
            return base * altura
        case 'T':   // Triângulo
            return base * altura / 2
        case 'E':   // Elipse
            return (base / 2) * (altura /2 ) * Math.PI
        default:
            return undefined
    }
}

console.log(`Área retângulo 10x25: ${calcular_area(10, 25, 'R')}`)
console.log(`Área triângulo 7.5x16.2: ${calcular_area(7.5, 16.2, 'T')}`)
console.log(`Área elipse (círculo) 15x15: ${calcular_area(15, 15, 'E')}`)
console.log(`Área ???? 80x55: ${calcular_area(80, 55, 'X')}`)

// Usando parâmetro predefinido
console.log(`Área retângulo 22x15: ${calcular_area(22, 15)}`)

/*
    Regras para o uso de parâmetros predefinidos em funções
    1. O parâmetro predefinido deve ser o último parâmetro da função.
    2. Pode haver mais de um parâmetro predefinido. Nesse caso, eles
       devem ser os últimos parâmetros da função.
*/