import React from 'react'
import './Mainpage.css'
import logo from '../assets/logo.svg'

const mainpage = () => {
  return (
    <div>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
    </div>
  )
}

export default mainpage