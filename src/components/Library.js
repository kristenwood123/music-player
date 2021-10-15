import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({ songs, setCurrentSong, setSongs, libraryStatus }) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map(song => 
        <LibrarySong 
          songs={songs} 
          song={song} 
          setCurrentSong={setCurrentSong}
          key={song.id}
          setSongs={setSongs} />
          )}
      </div>
    </div>
  )
}

export default Library
