import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inscription from './components/pages/inscription'
import Login from './components/pages/login'
import Landingpage from './components/pages/landingPage'
import ComputerScience from './components/pages/computerScience'
import Couture from './components/pages/couture'
import Agriculture from './components/pages/agriculture'


function App() {

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
        <Route path='/course1'>
          <Route index element={<ComputerScience/>}/>
        </Route>
        <Route path='/course2'>
          <Route index element={<Couture/>}/>
        </Route>
        <Route path='/course2'>
          <Route index element={<Agriculture/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
