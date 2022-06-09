import React from 'react'

// function propsAreEqual(prevCharacters,nextCharacters){
//     console.log(prevCharacters.characters)
//     console.log(nextCharacters.characters)
//     console.log("Comparison:",prevCharacters.characters===nextCharacters.characters)

//     return prevCharacters.characters===nextCharacters.characters
// }

// high-order components (HOC)
export default React.memo(function Characters({searchKeyword,characters,onClick}) {
    const items = characters.filter(character=>character.name.includes(searchKeyword))
    return (
      <>
          {items.map(character=>(
              <article key={character.id} onClick={onClick}>
                  {console.log("Render")}
                  <p>{character.name}</p>
                  <img src={character.image} alt={character.name} />
              </article>
          ))}
      </>
    )
}/*,propsAreEqual*/)
