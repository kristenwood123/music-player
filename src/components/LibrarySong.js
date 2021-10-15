import React from 'react'
import { playAudio } from '../util'

const LibrarySong = ({ song, songs, currentSong, setCurrentSong, audioRef, isPlaying, setSongs }) => {
  const { name, cover, artist, id } = song

  const handleSelectSong = () => {
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
   
    playAudio(isPlaying, audioRef)
  }
  return (
    <div className={`library-song ${song.id === currentSong.id ? 'selected' : ''}`}onClick={handleSelectSong}>
      <img src={cover} alt={name} />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  )
}

export default LibrarySong
