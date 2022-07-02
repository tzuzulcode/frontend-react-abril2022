import {useDispatch, useSelector} from 'react-redux'

function App() {
  const state = useSelector((state)=>{return state.auth}) //Leer el estado
  const dispatch = useDispatch() // Funcion para actualizar el estado
  return (
    <>
    <h1>React</h1>
    {console.log(state)}
    </>
  );
}

export default App;
