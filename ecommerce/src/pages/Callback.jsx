import React, { useCallback, useEffect, useState,useMemo,useDeferredValue } from 'react'
import Characters from '../components/Characters'
import useInput from '../hooks/useInput'

let lastIndex = 0

export default function Callback() {

    const [characters,setCharacters] = useState([])
    const [modalOpen,setModalOpen] = useState(false)
    const [selectedCharacter,setSelectedCharacter] = useState({})
    const searchKeyword = useInput("text","")

    useEffect(()=>{
      fetch("https://rickandmortyapi.com/api/character")
      .then(response=>response.json())
      .then(({results})=>{
        setCharacters(results)
      })
      .catch(console.log)
    },[])


    const [number,setNumber] = useState(0)
    const items = useMemo(
        ()=>{
            console.log("Filtering...")
            return characters.filter(character=>character.name.includes(searchKeyword.value))
        },
        [searchKeyword.value]
    )

    // const increment = useCallback(()=>{
    //   setNumber(number+1)
    // },[number])

    const openModal = useCallback(()=>{
      setModalOpen(true)
    },[])

    const closeModal = ()=>{
      setModalOpen(false)
    }

    const selectCharacter = useCallback((character)=>{
      console.log(character)
      setSelectedCharacter(character)
    },[])

    const stopBubbling = (event)=>{
      event.stopPropagation()
    }


  return (
    <div>
      <h1>useCallback</h1>
      <input {...searchKeyword}/>
      <button onClick={()=>{setNumber(number+1)}}>Increment</button>
      <p>{number}</p>
      {/* {modalOpen&&<section>
          <div className='bg-black bg-opacity-70 w-full h-full fixed left-0 top-0 flex justify-center items-center' onClick={closeModal}>       
          </div>
          <div className='bg-gray-200 w-1/2 h-1/2 absolute left-1/4 top-1/4'>
              <h2>Modal</h2>
              <p>{selectedCharacter.name}</p>
              <p>Modal abierto</p>
              <button onClick={closeModal}>Cerrar modal</button>
          </div>
        
        </section>} */}
        {modalOpen&&<section className='bg-black bg-opacity-70 w-full h-full fixed left-0 top-0 flex justify-center items-center' onClick={closeModal}>
          <div className='bg-gray-200 w-1/2 h-1/2' onClick={stopBubbling}>
              <h2>Modal</h2>
              <p>{selectedCharacter.name}</p>
              <p>Modal abierto</p>
              <button onClick={closeModal}>Cerrar modal</button>
          </div>        
        </section>}
      <Characters selectCharacter={selectCharacter} openModal={openModal} characters={items}/>

      
      
    </div>
  )
}
