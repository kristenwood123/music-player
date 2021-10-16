import React from 'react'
import { useGlobalContext } from '../context'


const LibrarySong = ({ song }) => {
  const { name, cover, artist, id } = song
  const { songs, currentSong, setCurrentSong, setSongs, audioRef, setIsPlaying, isPlaying } = useGlobalContext()

  const handleSelectSong = async () => {
    const selectedSong = songs.filter((state) => state.id === id);
     await setCurrentSong(selectedSong[0]);
    //Active State
    const newSongs = songs.map((song) => {
      if(song.id === id){
        return {
          ...song,
          active: true
        } 
      } else {
        return {
          ...song, 
          active: false
        }
      }
    })
    setSongs(newSongs)

    console.log('PLAYING:::',isPlaying,audioRef)
    // Check if the song is playing
   if(isPlaying) audioRef.current.play()
  }
  return (
    <div 
      className={`library-song ${song.id === currentSong.id ? "selected" : ""}`} 
      onClick={() =>handleSelectSong()}>
      <img src={cover} alt={name} />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  )
}

export default LibrarySong
