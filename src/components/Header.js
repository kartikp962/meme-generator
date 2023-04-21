import React from 'react'
import TrollFace from '../images/troll-face.png'
import '../App.css'

function Header() {
  return (
    <div className='header'>
        <img src={TrollFace} className='header--image' />
        <h2 className='header--title'>Meme Generator</h2>
        <p className='header--project'>React Course - Project 3</p>
    </div>
  )
}

export default Header