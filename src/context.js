import React, { useContext, useState, useRef } from 'react'

// Import data
import chillSongs from './data'

const AppContext = React.createContext()


const AppProvider = ({ children }) => {
// State ------------------------------------->
  const [songs, setSongs] = useState(chillSongs)
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)
  const [libraryStatus, setLibraryStatus] = useState(false)
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

  return <AppContext.Provider value={{
    songs, 
    setSongs, 
    currentSong,
    setCurrentSong,
    isPlaying,
    setIsPlaying,
    audioRef,
    libraryStatus,
    setLibraryStatus,
    songInfo,
    setSongInfo,
    handleSongEnd,
    handleTimeUpdate
  }}>
    {children}
  </AppContext.Provider>
}

//custom hook
 export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }