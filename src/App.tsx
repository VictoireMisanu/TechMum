import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inscription from './components/pages/inscription'
import Login from './components/pages/login'
import Landingpage from './components/pages/landingPage'
import DigitalLitteracy from './components/pages/digitalLitteracy'
import DigitalMarketing from './components/pages/digitalMarketing'
import CommunityManagement from './components/pages/communityManagement'


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
          <Route index element={<DigitalLitteracy/>}/>
        </Route>
        <Route path='/course2'>
          <Route index element={<DigitalMarketing/>}/>
        </Route>
        <Route path='/course2'>
          <Route index element={<CommunityManagement/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
