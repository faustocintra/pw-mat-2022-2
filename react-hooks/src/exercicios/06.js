import * as React from 'react'
// 🐨 você vai precisar dos seguintes itens de '../pokemon':
// fetchPokemon: a função que retorna as informações do pokémon
// PokemonInfoFallback: o que é exibido enquanto as informações do pokémon
// são carregadas
// PokemonDataView: o componente usado para exibir as informações do pokémon
import { PokemonForm, fetchPokemon, PokemonInfoFallback, PokemonDataView } from '../pokemon'

function PokemonInfo({pokemonName}) {
  // 🐨 crie o estado para o pokémon (null)
  const [pokemon, setPokemon] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [status, setStatus] = React.useState('idle')  // Ocioso

  // 🐨 crie React.useEffect de modo a ser chamado sempre que pokemonName mudar.
  // 💰 NÃO SE ESQUEÇA DO VETOR DE DEPENDÊNCIAS!
  React.useEffect(() => {
    
    // 💰 se pokemonName é falso (ou uma string vazia) não se preocupe em fazer 
    // a requisição (retorne precocemente).
    if(! pokemonName) return

    // 🐨 antes de chamar `fetchPokemon`, limpe o estado atual do pokemon
    // ajustando-o para null.
    setPokemon(null)
    setError(null)
    setStatus('idle')

    // (Isso é para habilitar o estado de carregamento ao alternar entre diferentes
    // pokémon.)
    // 💰 Use a função `fetchPokemon` para buscar um pokémon pelo seu nome:
    //   fetchPokemon('Pikachu').then(
    //     pokemonData => {/* atualize todos os estados aqui */},
    //   )
    /*
    fetchPokemon(pokemonName)
      .then(  // Callback se der certo
        pokemonData => setPokemon(pokemonData)
      )
      .catch( // Callback se der
        error => alert('ERRO: ' + error.message)
      )
    */

    async function getData() {
      try {
        setStatus('pending')
        const pokemonData = await fetchPokemon(pokemonName)
        setPokemon(pokemonData)
        setStatus('resolved')
      }
      catch(error) {
        // Armezena o erro para posterior exibição
        setError(error)
        setStatus('rejected')
      }
    }
    getData()

  }, [pokemonName])

  // 🐨 return the following things based on the `pokemon` state and `pokemonName` prop:
  // 🐨 retorne o seguinte baseado nos estados `pokemon` e `pokemonName`:
  //   1. não há pokemonName: 'Informe um pokémon'
  //   2. tem pokemonName mas não pokemon: <PokemonInfoFallback name={pokemonName} />
  //   3. tem pokemon: <PokemonDataView pokemon={pokemon} />
  /*
  if(error) return (
    <div role="alert">
      ERRO: <pre style={{ whitespace: 'normal' }}> {error.message} </pre>
    </div>
  )
  else if(! pokemonName) return 'Informe um pokémon'
  else if(pokemonName && ! pokemon) return <PokemonInfoFallback name={pokemonName} />
  else if(pokemon) return <PokemonDataView pokemon={pokemon} />
  */

  switch(status) {
    case 'pending':
      return <PokemonInfoFallback name={pokemonName} />
    case 'resolved':
      return <PokemonDataView pokemon={pokemon} />
    case 'rejected':
      return (
        <div role="alert">
          ERRO: <pre style={{ whitespace: 'normal' }}> {error.message} </pre>
        </div>
      )
    default: // idle
      return 'Informe um pokémon'
  }
  
}

function Exercicio06() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <PokemonInfo pokemonName={pokemonName} />
      </div>
    </div>
  )
}

export default Exercicio06