import React, { useState } from 'react'
import Song from './components/Song'
import Player from './components/Player'
import './styles/app.scss'

import chillSongs from './data'

function App() {
const [songs, setSongs] = useState(chillSongs)
const [currentSong, setCurrentSong] = useState(songs[3])
const [isPlaying, setIsPlaying] = useState(false)

 

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player 
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong} />
    </div>
  )
}

export default App


