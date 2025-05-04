import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import ServicesFullPage from './Pages/ServicesFullPage';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/About';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<ServicesFullPage/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/about' element={<AboutUs/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
