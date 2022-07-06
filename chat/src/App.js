import {useDispatch, useSelector} from 'react-redux'
import { login, logout } from './features/auth'

function App() {
  const state = useSelector((state)=>{return state.auth}) //Leer el estado
  const dispatch = useDispatch() // Funcion para actualizar el estado

  const handleLogin = ()=>{
    // login(payload)
    // Nota: Solo podemos pasar un parámetro como payload
    dispatch(login({
      name:"Tzuzul",
      email:"mail@tzuzulcode.com"
    }))
  }
  const handleLogout = ()=>{
    // Nota: Si no usamos el payload, no es necesario pasarlo
    dispatch(logout())
  }
  return (
    <>
      <h1>React</h1>
      {console.log(state)}
      {state.logged&&<p>{state.user.name}</p>}
      <button onClick={handleLogin}>Iniciar sesión</button>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </>
  );
}

export default App;
