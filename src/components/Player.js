import React, { useRef } from 'react'
import { FaPlay } from 'react-icons/fa'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'



const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  const { name, cover, artist, audio, color, id, active } = currentSong
  const audioRef = useRef(null)


  const handlePlaySong = () => {
    if(isPlaying) {
      audioRef.current.pause()
      setIsPlaying(!isPlaying)
    } else {
      audioRef.current.play()
      setIsPlaying(!isPlaying)
    }
  }  

  return (
    <div className='player'>
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End time</p>
      </div>
      <div className="play-control">
        <MdKeyboardArrowLeft className='icon back'/>
        <FaPlay 
          className='icon play'
          onClick={handlePlaySong}/>
        <MdKeyboardArrowRight className='icon forward'/>
      </div>
      <audio ref={audioRef} src={audio}></audio>
    </div>
  )
}

export default Player
