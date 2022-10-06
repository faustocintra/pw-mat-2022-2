import * as React from 'react'

function Greeting({initialName = ''}) {
  // 🐨 inicialize o estado como o valor do localStorage
  // 💰 window.localStorage.getItem('name') ?? initialName
  const [name, setName] = React.useState(
    // Se existir um valor para "name" armazenado no localStorage,
    // use-o como valor inicial da variável de estado. Senão,
    // use o valor da variável initialName
    // ?? -> operador de coalescência de nulos (se o primeiro valor
    // for nulo, usa o segundo)

    // LAZY INITIALIZER (inicialização preguiçosa)
    // Faz com que o valor inicial da variável de estado seja ajustado
    // apenas um vez, na fase da montagem.
    // Para obter esse efeito, basta passar o valor inicial no formato
    // de uma função.
    () => obterLocalStorage() ?? initialName
  )

  function obterLocalStorage() {
    console.count('Leu localStorage')
    return window.localStorage.getItem('name')
  }

  // 🐨 Aqui é onde usamos `React.useEffect`.
  // A função deve armazenar `name` no localStorage.
  // 💰 window.localStorage.setItem('name', name)

  // React.useEffect() leva dois parâmetros:
  // 1) Uma função (geralmente no formato de arrow function), que será
  // executada como um efeito colateral da atualização do componente
  // 2) Um vetor de dependências (variáveis que serão "vigiadas") por
  // atualizações para disparar o useEffect.
  React.useEffect(() => {
    // Armazenando o valor da variável de estado name
    // no localStorage
    window.localStorage.setItem('name', name)
    // Conta a quantidade de atualizações do componente
    console.count('atualizei')
  }, [name])

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Olá {name}</strong> : 'Por favor, informe seu nome'}
    </div>
  )
}

function Exercicio02() {
  return <Greeting />
}

export default Exercicio02