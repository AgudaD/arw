import React from 'react'
import './Mainpage.css'
// import Polygon from '../assets/Polygon 1.svg'
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
              <p className='button'>LOG IN</p>
              <p className='sign-in'>GET STARTED</p>
            </div>
        </div>

        <div className="bod">
          <div className="body-txt">
            <h2 className='txt-header'>Automate Routine Work</h2>
            <p className='txt-info'>Automate everyday tasks like sharing updates and alternate any process from onboarding to gathering feedback.</p>
           <div className="clickers">
             <p className='sign-in'>GET STARTED</p>
            <div className="play">
              <img src={play} alt="" />
              <p className='how'>How it works</p>
            </div>
           </div>
          </div>

          <img className='image' src={image} alt="" />
        </div>
        <footer>
          <p>www.pixel.com</p>

          <div className="socials">
            <p>Follow us</p>
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
          </div>
        </footer>
      </div>
    </div>
        

  )
}

export default mainpage