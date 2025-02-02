import React from 'react'

export const Nav = () => {
  return (
    <nav
        style={{
            position: 'relative', // Enables positioning of child elements
            textAlign: 'center',
            paddingTop: '0px',
            backgroundColor: 'transparent', // Preserve transparency
        }}
    >
        <ul className='header-list'>
          <li className='header-area'>Home</li>
          •
          <li className='header-area'>About</li>
          •
          <li className='header-area'>Contact</li>
        </ul>
      </nav>
  )
}

export default Nav;