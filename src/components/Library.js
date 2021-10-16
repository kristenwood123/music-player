import React from 'react'
import LibrarySong from './LibrarySong'
import { useGlobalContext } from '../context'

const Library = () => {
  const { songs, libraryStatus,  } = useGlobalContext()
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map(song => 
        <LibrarySong 
          song={song} 
          key={song.id}
          id={song.id}/>
          )}
      </div>
    </div>
  )
}

export default Library
