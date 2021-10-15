import React, { useState, useRef } from 'react'
// Import Styles
import './styles/app.scss'

// Adding Components
import Song from './components/Song'
import Player from './components/Player'
import Library from './components/Library'
import Navbar from './components/Navbar'


import { useGlobalContext} from './context'

function App() {
  const { 
    currentSong, 
    libraryStatus, 
    setLibraryStatus, 
    handleTimeUpdate, 
    audioRef, 
    handleSongEnd
  } = useGlobalContext()
    const { audio } = currentSong;

  // Handlers ----------------------------->

  return (
    <div className={`${libraryStatus ? "library-active" : ""}`}>
      <Navbar 
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        />
      <Song />
      <Player />
      <Library />
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


