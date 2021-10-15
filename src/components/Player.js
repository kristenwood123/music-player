import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import { IoMdPause } from 'react-icons/io'
import { useGlobalContext } from '../context'


const Player = () => {

const { isPlaying, currentSong, setCurrentSong, songs, setIsPlaying, audioRef, songInfo, setSongInfo } = useGlobalContext()

  // Event Handlers
  const handlePlaySong = () => {
    if(isPlaying) {
      audioRef.current.pause()
      setIsPlaying(!isPlaying)
    } else {
      audioRef.current.play()
      setIsPlaying(!isPlaying)
    }
  }  

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    )
  }

  const handleDrag = e => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({...songInfo, currentTime: e.target.value})
  }

  const handleSkipTrack = async (direction) => {
     let currentIndex = songs.indexOf(currentSong)
     if(direction === 'skip-forward') {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length])
     }
     if(direction === 'skip-back') {
       if((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1])
        if(isPlaying) audioRef.current.play()
       return;
     }
     await setCurrentSong(songs[(currentIndex - 1) % songs.length])
    }
    if(isPlaying) audioRef.current.play()
}

// Add styles
const trackAnim = {
  transform: `translate(${songInfo.animationPercentage}%)`
}

  return (
    <div className='player'>
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div className="track" style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}}>
          <input 
            min={0} 
            max={songInfo.duration || 0} 
            type="range"
            value={songInfo.currentTime}
            onChange={handleDrag} 
            />
          <div style={trackAnim} className="animate-track"></div>
           </div>
          <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
      </div>
      <div className="play-control">
        <MdKeyboardArrowLeft 
            onClick={() => handleSkipTrack('skip-back')}
            className='icon back'/>
          {!isPlaying ? <FaPlay 
          className='icon play'
          onClick={handlePlaySong}/> : 
        <IoMdPause
          className='icon pause'
          onClick={handlePlaySong}/>
          }
        <MdKeyboardArrowRight 
            onClick={() => handleSkipTrack('skip-forward')}
            className='icon forward'/>
      </div>
    </div>
  )
}

export default Player
