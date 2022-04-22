const Listas =()=>{


    //Reto: Mostrar datos de los alumnos
    const alumnos = [
        {
            name:"Tzuzul",
            edad:23
        },
        {
            name:"Eduardo",
            edad:25
        },
        {
            name:"Claudia",
            edad:24
        },
    ]

    // Devolviendo un Fragment
    return <>
        {alumnos.map((alumno,index)=><div key={index}>
            <p>{alumno.name}</p>
        </div>)}
    </>
}


export default Listas