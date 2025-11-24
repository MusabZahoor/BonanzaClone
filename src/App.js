import React from 'react'
import HeaderOne from './components/HeaderOne/HeaderOne'
import CloneFooter from './components/Footer/CloneFooter'
import CloneCarousel from './components/CloneCarousel'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Sale from './pages/Sale'
import ReadyToWear from './pages/ReadyToWear'
import Unstitched from './pages/Unstitched'
import Beauty from './pages/Beauty'
import Fragrances from './pages/Fragrances'
import Men from './pages/Men'
import Sweaters from './pages/Sweaters'
import Kids from './pages/Kids'
import Socks from './pages/Socks'
import FestiveEdit from './pages/FestiveEdit'

const App = () => {
  return (
    <div>
      <Router>
     <HeaderOne/>

      <Routes>
        <Route path="/" element={<CloneCarousel />} />
        <Route path="/sale" element={<Sale/>} />
        <Route path='/ReadyToWear'  element={<ReadyToWear/>} />
        <Route path='/unstitched' element={<Unstitched/>} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/fragrances" element={<Fragrances />} />
        <Route path="/men" element={<Men />} />
        <Route path="/sweaters" element={<Sweaters />} />
        <Route path='/kids' element={<Kids/>} />
        <Route path='/socks' element={<Socks/>} />
        <Route path='/FestiveEdit' element={<FestiveEdit/>} />
        
        
      </Routes>
     </Router>
     <CloneFooter />
    </div>
  )
}

export default App
