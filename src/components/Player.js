import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import { IoMdPause } from 'react-icons/io'

const Player = ({ isPlaying, currentSong, setCurrentSong, songs, setIsPlaying, audioRef, songInfo, setSongInfo }) => {
 
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

  const handleDrag = e => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({...songInfo, currentTime: e.target.value})
  }

  const handleSkipTrack = (direction) => {
     let currentIndex = songs.indexOf(currentSong)
     if(direction === 'skip-forward') {
       setCurrentSong(songs[(currentIndex + 1) % songs.length])
       console.log('nextSong', currentSong);
     }
     if(direction === 'skip-back') {
       if((currentIndex - 1) % songs.length === -1) {
       setCurrentSong(songs[songs.length -1])
       return;
     }
     setCurrentSong(songs[(currentIndex - 1) % songs.length])
  }
}

  return (
    <div className='player'>
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input 
          min={0} 
          max={songInfo.duration || 0} 
          type="range"
          value={songInfo.currentTime}
          onChange={handleDrag} />
        <p>{getTime(songInfo.duration)}</p>
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
