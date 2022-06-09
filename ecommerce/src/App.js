import { useContext, useEffect } from 'react';
import {Route,Routes} from 'react-router-dom'
import { get } from './api';
import Navbar from './components/Navbar';
import { authContext } from './context/Auth';
import Callback from './pages/Callback';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
    const {setUser} = useContext(authContext)

    // Recuperamos sesión del usuario
    useEffect(()=>{
      get("/api/auth/validate")
      .then(result=>{
        setUser({
          logged:true,
          user:result.user
        })
      })
      .catch(error=>console.log(error))
    },[setUser])

    return (
        <>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/callback' element={<Callback/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          </Routes>
        </>
    );
}

export default App;
