import React from 'react'
import memesData from '../memesData'

const Body = () => {

    function getMemeImage() {
        for(let i of memesData.data.memes) {
            console.log(i);
        }
    }
    return (
      <div className='meme--container'>
          <div  className='meme--form' action="">
              <input className='meme--input' type="text" placeholder='Top'/>
              <input className='meme--input' type="text" placeholder='Buttom'/>
              <button className='meme--button' onClick={getMemeImage}>Get a new meme image  🖼</button>
          </div>
      </div>
    )
}

export default Body