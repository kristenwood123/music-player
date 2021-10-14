import React from 'react'

const LibrarySong = ({ song }) => {
  const { name, cover, artist } = song
  return (
    <div className='library-song'>
      <img src={cover} alt={name} />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  )
}

export default LibrarySong
