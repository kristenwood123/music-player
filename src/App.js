import React, { useState, useRef } from 'react'
// Import Styles
import './styles/app.scss'
// Adding Components
import Song from './components/Song'
import Player from './components/Player'
import Library from './components/Library'
// Import data
import chillSongs from './data'

function App() {
const [songs, setSongs] = useState(chillSongs)
const [currentSong, setCurrentSong] = useState(songs[0])
const [isPlaying, setIsPlaying] = useState(false)
const audioRef = useRef(null)

const handleTimeUpdate = e => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime: current, duration })
  }

const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  })

 const { audio } = currentSong;

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player 
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        audioRef={audioRef} 
        handleTimeUpdate={handleTimeUpdate}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        />
      <Library 
        songs={songs} 
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        />
      <audio 
        onTimeUpdate={handleTimeUpdate} 
        ref={audioRef} 
        src={audio}
        onLoadedMetadata={handleTimeUpdate}>
      </audio>
    </div>
  )
}

export default App


