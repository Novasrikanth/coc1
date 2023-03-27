import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Aboutus from './Aboutus'
import Congregation from './Congregation'
import Contactus from './Contactus'
import Home from './Home'
import Search from './Search'
import Services from './Services'
import Video from './Video'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <ul>
            <li><Link to='/Home' >Home</Link></li>
            <li><Link to='/Video' >Video</Link></li>
            <li><Link to='/Services' >Services</Link></li>
            <li><Link to='/Congregation' >Congregation</Link></li>
            <li><Link to='/Aboutus' >Aboutus</Link></li>
            <li><Link to='/Contactus' >Contactus</Link></li>
            <li><Link to='/Search' >Search</Link></li>
           
        </ul>
        <Routes>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Video' element={<Video/>}/>
            <Route path='/Services' element={<Services/>}/>
            <Route path='/Congregation' element={<Congregation/>}/>
            <Route path='/Aboutus' element={<Aboutus/>}/>
            <Route path='/Contactus'element={<Contactus/>}/>
            <Route path='/Search' element={<Search/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default Navbar;
