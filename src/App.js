import React, { useState, useRef } from 'react'
// Import Styles
import './styles/app.scss'

// Adding Components
import Song from './components/Song'
import Player from './components/Player'
import Library from './components/Library'
import Navbar from './components/Navbar'

// Import data
import chillSongs from './data'

function App() {
  // State
const [songs, setSongs] = useState(chillSongs)
const [currentSong, setCurrentSong] = useState(songs[0])
const [isPlaying, setIsPlaying] = useState(false)
const audioRef = useRef(null)
const [libraryStatus, setLibraryStatus] = useState(false)
const { audio } = currentSong;

const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0
  })
 

const handleTimeUpdate = e => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    // Calculate percentage
    const roundedCurrent = Math.round(current)
    const roundedDuration = Math.round(duration)
    const animation = Math.round((roundedCurrent / roundedDuration) * 100)
    setSongInfo({...songInfo, currentTime: current, duration, animationPercentage: animation })
  }

  const handleSongEnd = async () => {
    let currentIndex = songs.indexOf(currentSong)
    await setCurrentSong(songs[(currentIndex + 1) % songs.length])
    if(isPlaying) audioRef.current.play()
  }
  return (
    <div className={`${libraryStatus ? "library-active" : ""}`}>
      <Navbar 
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        />
      <Song currentSong={currentSong} />
      <Player 
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        audioRef={audioRef} 
        handleTimeUpdate={handleTimeUpdate}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        />
      <Library 
        songs={songs} 
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
        currentSong={currentSong}
        />
      <audio 
        onTimeUpdate={handleTimeUpdate} 
        ref={audioRef} 
        src={audio}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={handleSongEnd}>
      </audio>
    </div>
  )
}

export default App


