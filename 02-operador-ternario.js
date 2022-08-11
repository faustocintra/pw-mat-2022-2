let media = 7.2, resultado

// Estrutura if..else para definir o valor da
// variável resultado em função da condição media >= 6
if(media >= 6) {
    resultado = 'APROVADO'
}
else {
    resultado = 'Reprovado'
}

console.log({media, resultado})

// Usando o operador ternário
resultado = media >= 6 ? 'APROVADO' :  'Reprovado'

console.log({media, resultado})

let user = 'guest', msg

if(user === 'admin') msg = 'Login successful'
else msg = 'You are not allowed here'

console.log({user, msg})

// Converter a estrutura acima em um operador ternário
msg = user === 'admin' ? 'Login successful' : 'You are not allowed here'

console.log({user, msg})