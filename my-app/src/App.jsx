import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Registration, Login, Dashboard } from './components'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <header>
      <Link to="/register"><div>Register</div></Link>
      <Link to="/login"><div>Login</div></Link>
    </header>
    
     <main>
      <Routes>
        <Route path='/register' element={<Registration />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
      </main>
    </BrowserRouter>
      
    </>
  )
}

export default App