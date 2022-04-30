import React, { useState } from 'react'

export default function Estado() {
    // Destructuring
    const [content,setContent] = useState("")

    const [messages,setMessages] = useState([])

    const changeInput = (event) =>{
        setContent(event.target.value)
    }

    const sendMessage = ()=>{
        messages.push(content)
        setMessages([...messages])
        setContent("")
        // Explicar esta función
    }

  return (
    <>
        <div>
            {messages.map(message=><p>{message}</p>)}
        </div>
        <p>{content}</p>
        <input type="text" value={content} onChange={changeInput}/>
        <button onClick={sendMessage}>Enviar</button>
    </>
  )
}
