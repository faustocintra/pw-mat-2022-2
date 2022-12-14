import * as React from 'react'

function Name({name, onNameChange}) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  )
}

// ๐จ aceite as props `animal` e `onAnimalChange` neste componente
function FavoriteAnimal() {
  // ๐ฃ delete this, it's now managed by the App
  const [animal, setAnimal] = React.useState('')
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={event => setAnimal(event.target.value)}
      />
    </div>
  )
}

// ๐จ descomente isso
// function Display({name, animal}) {
//   return <div>{`Olรก ${name}, seu animal favorito รฉ: ${animal}!`}</div>
// }


// ๐ฃ exclua esse componente e use o novo
function Display({name}) {
   return <div>{`Hey ${name}, you are great!`}</div>
}

function App() {
  // ๐จ adicione um useState para o animal
  const [name, setName] = React.useState('')
  return (
    <form>
      <Name name={name} onNameChange={event => setName(event.target.value)} />
      {/* ๐จ passe o animal e a prop onAnimalChange aqui (similar ao componente Name acima) */}
      <FavoriteAnimal />
      {/* ๐จ passe a prop do animal aqui */}
      <Display name={name} />
    </form>
  )
}

export default App