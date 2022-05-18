import { useContext, useEffect } from 'react';
import {Route,Routes,useLocation} from 'react-router-dom'
import Navbar from './components/Navbar';
import Template from './components/Template';
import { authContext } from './Context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {

  const context = useContext(authContext)
  
  useEffect(()=>{
    const token = localStorage.getItem("token")

    if(token){
      fetch("https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/validate",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization":"Bearer "+ token
        },
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.failed){
          console.log(data)
        }else{
          context.setAuth({
            id:data.user.id,
            name:data.user.name,
            logged:true
          })
        }
        
      })
      .catch(error=>console.log(error))
    }
  },[])

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </>
  );
}

export default App;
