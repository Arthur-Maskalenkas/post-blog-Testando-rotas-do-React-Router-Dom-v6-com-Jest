import { Route, BrowserRouter, Routes, Link } from 'react-router-dom'

import { Signup } from '../pages/Signup'

import { Login } from '../pages/login'
import { Home } from '../pages/home'
import { Menu } from '../components/menu'

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
