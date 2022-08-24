let fullname = 'Jucicleison Junqueira Júnior'
let username = 'junin'
let group = 'alunos'

// Criando um objeto a partir das variáveis acima.
// Note que os nomes das propriedades do objeto são IGUAIS
// aos das variáveis

// let user = {
//     fullname: fullname,
//     username: username,
//     group: group
// }

// Refazendo o objeto com propriedades abreviadas
let user = {
    //fullname,
    name: fullname,     // Propriedade com nome != variável
    username,
    group,
    password: 'deus'    // Propriedade não abreviada
}

console.log(user)

// Usando propriedades abreviadas para efeito de depuração

// Exibindo o valor de duas variáveis. Veja que os valores
// são exibidos, mas a saída não informa de quais variáveis
// provêm os valores

let x = 10, y = 5
console.log(x, y)

// Saída melhorada: passando um objeto com propriedades
// abreviadas para o console.log(), como uma forma de sabermos
// de quais variáveis provêm os valores
console.log({x, y})