import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// COMPONENT
import NavBarComponent from './component/NavBarComponent'
import FooterComponent from './component/FooterComponent'


// PAGE
import HomePage from './pages/HomePage'
import KelasPage from './pages/KelasPage'
import TesTimonialPage from './pages/TesTimonialPage'
import FaqPage from './pages/FaqPage'
import SyaratKetenPage from './pages/SyaratKetenPage'


function App() {

  return (
    <>
      <NavBarComponent />


      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/kelas' Component={KelasPage} />
        <Route path='/tesTimonial' Component={TesTimonialPage} />
        <Route path='/faq' Component={FaqPage} />
        <Route path='/syaratKeten' Component={SyaratKetenPage} />
      </Routes>


      <FooterComponent />
    </>
  )
}

export default App
