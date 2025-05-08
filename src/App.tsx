// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inscription from './components/pages/inscription'
import Login from './components/pages/login'
import Landingpage from './components/pages/landingPage'
import Courses from './components/pages/courses'
// import NavBar from './components/navBar'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Landingpage/>}/>
        </Route>
        <Route path='/register'>
          <Route index element={<Inscription/>}/>
        </Route>
        <Route path='/login'>
          <Route index element={<Login/>}/>
        </Route>
        <Route path='/courses'>
          <Route index element={<Courses/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
