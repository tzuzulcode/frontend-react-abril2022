import { useContext, useEffect, lazy, Suspense } from 'react';
import {Route,Routes} from 'react-router-dom'
import { get } from './api';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import { authContext } from './context/Auth';
import { cartContext } from './context/Cart';
import Cart from './pages/Cart';
import Loading from './pages/Loading';
import Transition from './pages/Transition';
// import Callback from './pages/Callback';
// import Home from './pages/Home';
// import Hooks from './pages/Hooks';
// import Login from './pages/Login';
// import SignUp from './pages/SignUp';
const Callback = lazy(()=>import('./pages/Callback'))
const Home = lazy(()=>import('./pages/Home'))
const Hooks = lazy(()=>import('./pages/Hooks'))
const Login = lazy(()=>import('./pages/Login'))
const SignUp = lazy(()=>import('./pages/SignUp'))

function App() {
    const {setUser} = useContext(authContext)
    const {setItems} = useContext(cartContext)

    // Recuperamos sesión del usuario
    useEffect(()=>{
      get("/api/auth/validate")
      .then(result=>{
        setUser({type:'LOGIN',payload:result.user})
        get("/api/cart")
        .then(data=>{
          setItems({
            type:"UPDATE",
            payload:data.items
          })
        })
        .catch(console.log)
      })
      .catch(error=>console.log(error))
    },[setUser,setItems])

    return (
        <>
          <Navbar/>
          <ErrorBoundary>
            <Suspense fallback={<Loading/>}>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/hooks' element={<Hooks/>}/>
                <Route path='/callback' element={<Callback/>}/>
                <Route path='/transition' element={<Transition/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/cart' element={<Cart/>}/>
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </>
    );
}

export default App;
