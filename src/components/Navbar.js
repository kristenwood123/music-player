import React from 'react'
import { ImMusic } from 'react-icons/im'

const Navbar = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library <ImMusic/>
      </button>
    </nav>
  )
}

export default Navbar
