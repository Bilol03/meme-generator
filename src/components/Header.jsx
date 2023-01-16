import React from 'react'
import troll from '../../public/troll-face.svg'

const Header = () => {
  return (
    <div className='header--container'>
        <span>
            <img src={troll} alt="" className='header--img' /> 
            <h2 className='header--name'>Meme Generator</h2>
        </span>
        <p className='header--info'>React Course Project3</p>
    </div>
  )
}

export default Header