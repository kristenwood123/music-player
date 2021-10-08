import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'



const Player = () => {
  return (
    <div className='player'>
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End time</p>
      </div>
      <div className="play-control">
        <MdKeyboardArrowLeft className='icon back'/>
        <FaPlay className='icon play'/>
        <MdKeyboardArrowRight className='icon forward'/>
      </div>
    </div>
  )
}

export default Player
