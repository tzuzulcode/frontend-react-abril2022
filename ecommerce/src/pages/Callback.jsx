import React, { useCallback } from 'react'

let lastIndex = 0

export default function Callback() {

    const handleClick = useCallback(()=>{
        console.log("Click")
    },[])

  return (
    <div>Callback</div>
  )
}
