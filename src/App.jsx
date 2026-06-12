import Header from './components/Header'
import Card from './components/Card'
import Todocontainer from './components/Todocontainer'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Landing from './pages/Landing'
import { useState } from 'react'

 function App(){
    const [user,setUser] = useState([
        {
            username:"admin",
            password:"123@"
        }
    ])
    return (
 <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login user={user} setUser={setUser}/>}/>
      <Route path='/signup' element={<Signup user={user} setUser={setUser}/>}/>
      <Route path='/landing' element={<Landing/>}/>
    </Routes>
  </BrowserRouter>
    )
  }

export default App
