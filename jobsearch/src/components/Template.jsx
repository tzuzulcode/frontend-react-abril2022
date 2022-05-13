import React from 'react'
import Navbar from './Navbar'

export default function Template({children}) {
  return (
    <>
        <Navbar/>
        {children}
    </>
  )
}
