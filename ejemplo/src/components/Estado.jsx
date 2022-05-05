import React, { useState,use } from 'react'

export default function Estado() {
    // Destructuring
    const [content,setContent] = useState("")

    const [messages,setMessages] = useState([])

    const changeInput = (event) =>{
        setContent(event.target.value)
    }

    const sendMessage = ()=>{
        messages.push(content) 
        setMessages([...messages]) // Por qué: [...messages]
        setContent("")
    }

  return (
    <>
        <div>
            {messages.map(message=><p className='message'>{message}</p>)}
        </div>
        <p className='writing'>{content}</p>
        <input type="text" value={content} onChange={changeInput}/>
        <button onClick={sendMessage}>Enviar</button>
        {/* Reto: Implementar menu de hamburguesa utilizando el estado */}
    </>
  )
}
