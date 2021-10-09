import React, { useRef, useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'



const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  const { audio } = currentSong;
  const audioRef = useRef(null)

  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null
  })


  const handleTimeUpdate = e => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime: current, duration })
  }

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    )
  }

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
        <p>{getTime(songInfo.currentTime)}</p>
        <input type="range" />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <MdKeyboardArrowLeft className='icon back'/>
        <FaPlay 
          className='icon play'
          onClick={handlePlaySong}/>
        <MdKeyboardArrowRight className='icon forward'/>
      </div>
      <audio onTimeUpdate={handleTimeUpdate} ref={audioRef} src={audio}></audio>
    </div>
  )
}

export default Player
