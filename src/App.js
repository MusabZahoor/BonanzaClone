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
import AboutUs from './pages/AboutUs'
import TrackYourOrder from './pages/TrackYourOrder'
import ShippingInformation from './pages/ShippingInformation'
import StoreLocator from './pages/StoreLocator'
import TermsOfServices from './pages/TermsOfServices'
import NewArrivals from './pages/NewArrivals'
import ProductDetails from './components/ProductDetails/ProductDetails.jsx'

const App = () => {
  return (
    <div>
      <Router>
     <HeaderOne/>

      <Routes>
        <Route path="/" element={<CloneCarousel />} />
        <Route path="/sale" element={<Sale/>} />
        <Route path='/newArrivals' element={<NewArrivals/>} />
        <Route path='/ReadyToWear'  element={<ReadyToWear/>} />
        <Route path='/unstitched' element={<Unstitched/>} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/fragrances" element={<Fragrances />} />
        <Route path="/men" element={<Men />} />
        <Route path="/sweaters" element={<Sweaters />} />
        <Route path='/kids' element={<Kids/>} />
        <Route path='/socks' element={<Socks/>} />
        <Route path='/FestiveEdit' element={<FestiveEdit/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='/TrackYourOrder' element={<TrackYourOrder/>} />
        <Route path='/ShippingInformation' element={ <ShippingInformation/>} />
        <Route path='/StoreLocator' element={ <StoreLocator/>} />
        <Route path='/TermsOfServices' element={<TermsOfServices/>}/>
        <Route path='/product/:id' element={<ProductDetails/>} />
      </Routes>
    <CloneFooter />
     </Router>
     
    </div>
  )
}

export default App
