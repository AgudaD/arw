import React from 'react'
import './Mainpage.css'
import Polygon from '../assets/Polygon 1.svg'
import logo from '../assets/logo.svg'
import image from '../assets/image.svg'
import play from '../assets/play.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'


const mainpage = () => {
  return (
    <div>
      <div className="container">
        <div className="navigation">
          <img className='logo' src={logo} alt="" />
            <div className="inner-left">
              <p>FEATURES</p>
              <p>ENTERPRISE</p>
              <p>PRICING</p>
              <p>RESOURCES</p>
            </div>

            <div className="right">
              <button className='button'>LOG IN</button>
              <button className='button sign-in'>GET STARTED</button>
            </div>
        </div>
      </div>
    </div>
        

  )
}

export default mainpage