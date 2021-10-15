import React from 'react'


const LibrarySong = ({ song, songs, setCurrentSong, currentSong, audioRef, isPlaying, setSongs }) => {
  const { name, cover, artist, id, active } = song

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

    // Check if the song is playing
    if(isPlaying) audioRef.current.play()
  }
  return (
    <div 
      className={`library-song ${song.id === currentSong.id ? "selected" : ""}`} 
      onClick={handleSelectSong}>
      <img src={cover} alt={name} />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  )
}

export default LibrarySong
