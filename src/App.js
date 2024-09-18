import React from 'react'
import Signup from './Signup'
import { BrowserRouter as  Router, Routes, Route, Link } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import Changepassword from './Changepassword'

function App() {
  return (
    <div>
      <h1>App Component</h1>
      <Router>
        <Link to='/signup'>Signup</Link> || <Link to='login'>Login</Link>
        <Routes>
          <Route element={<Signup/>} path='/signup'/>
          <Route element={<Login/>} path='/login'/>
          <Route element={<Dashboard/>} path='/dashboard'/>
          <Route element={<Changepassword/>} path='/changepassword'/>
        </Routes>
      </Router>
    </div>
  )
}

export default App