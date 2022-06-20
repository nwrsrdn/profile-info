import React from 'react';

const Header = props => {
  return (
    <header className='header-section container'>
      <div className='header-title'>
        <h1>Erwin Andres</h1>
        <h2>Software Engineer</h2>
        <h3>Marikina City, PH</h3>
      </div>
      <div className='header-image'>
        <img src="../nwrsrdn.jpeg" alt="piktur" />
      </div>
    </header>
  )
}

export default Header;