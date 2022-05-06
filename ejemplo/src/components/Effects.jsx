import React, { useEffect, useState } from 'react'

export default function Effects() {
    // Espacio para los hooks
    
    const [change,setChange] = useState(false)
    const [movies,setMovies] = useState([])
    
    // useEffect(()=>{
    //     console.log("Efecto")
    // },[change])

    useEffect(()=>{
      fetch("http://www.omdbapi.com/?apikey=7a9c3aee&s=star")
      .then(result=>result.json())
      .then(data=>{
          setMovies(data.Search)
      })
    },[]) //Si se dejan las dependencias en vacio, solo ejecuta una vez el efecto

    //Reto: Buscar una API


    //Termina el espacio 
  return (
    <div>
        <button onClick={()=>{setChange(!change)}}>Efecto</button>
        {movies.map(movie=>(
          <article key={movie.imdbID}>
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <img src={movie.Poster}></img>
          </article>
        ))}
    </div>
  )
}
