import React from 'react'

const LibrarySong = ({ song, songs, setCurrentSong, audioRef, isPlaying, setSongs }) => {
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

    setCurrentSong(song)
    if(isPlaying) {
      const playPromise = audioRef.current.play()
      if(!playPromise !== undefined){
        playPromise.then((audio) => {
          audioRef.current.play()
        })
      }
    }
  }
  return (
    <div className={`library-song ${song.active ? 'selected' : ''}`}onClick={handleSelectSong}>
      <img src={cover} alt={name} />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  )
}

export default LibrarySong
