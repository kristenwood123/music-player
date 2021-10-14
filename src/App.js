import React, { useState } from 'react'
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
const [currentSong, setCurrentSong] = useState(songs[3])
const [isPlaying, setIsPlaying] = useState(false)

 

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player 
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong} 
        />
      <Library songs={songs}/>
    </div>
  )
}

export default App


