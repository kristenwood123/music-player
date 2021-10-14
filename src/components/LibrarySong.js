import React from 'react'

const LibrarySong = ({ song, songs, setCurrentSong, audioRef, isPlaying }) => {
  const { name, cover, artist } = song

  const handleSelectSong = () => {
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
    <div className='library-song' onClick={handleSelectSong}>
      <img src={cover} alt={name} />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  )
}

export default LibrarySong
