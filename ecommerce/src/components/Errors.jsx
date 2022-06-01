import React from 'react'

export default function Errors({errors}) {
  return (
    <>
        {
            errors.isErrors&&
            <div>
                <ul>
                    {errors.errors.map((error,index)=>
                        <li key={index}>{error}</li>
                    )}
                </ul>
            </div>
        }
    </>
  )
}
