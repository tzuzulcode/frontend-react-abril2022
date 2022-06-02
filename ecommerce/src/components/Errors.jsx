import React from 'react'

export default function Errors({errors}) {
  return (
    <>
        {
            errors.isErrors&&
            <div >
                <ul>
                    {errors.errors.map((error,index)=>
                        <li className='bg-red-300 text-red-900 w-1/2 mx-auto mt-10 p-5 my-5' key={index}>{error}</li>
                    )}
                </ul>
            </div>
        }
    </>
  )
}
