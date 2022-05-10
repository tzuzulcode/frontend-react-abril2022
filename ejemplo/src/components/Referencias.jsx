import React, { useRef } from 'react'

export default function Referencias() {
    const input = useRef()

    const sendMessage = () =>{
        console.log(input.current.value)
    }

    return (
      <div>
          <input type="text" ref={input}></input>
          <button onClick={sendMessage}>Enviar</button>
      </div>
    )
}
