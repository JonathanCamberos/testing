// Header.js

import React from 'react';
import './../../App.css'; // Import the CSS file for styling
import banner from './banner.png';
import banner_edit from './banner_edit.png';
import signature from './signature_rough.png';
import handDrawnLine from './line_2.png'

function Header() {
  return (
    
    // <header className="header-container">
    //   <h1>
    //     <img src={banner_edit} alt="alt" style={{ width: '150px', height: 'auto' }} />
    //   </h1>
      
      // <nav>
      //   <ul className='header-list'>
      //     <li className='header-area'>Home</li>
      //     •
      //     <li className='header-area'>About</li>
      //     •
      //     <li className='header-area'>Contact</li>
      //   </ul>
      // </nav>
    // </header>
    // );
    <header
            style={{
                position: 'relative', // Enables positioning of child elements
                textAlign: 'center',
                paddingTop: '20px',
                paddingBottom: '10px',
                backgroundColor: 'transparent', // Preserve transparency
            }}
        >
            {/* Banner */}
            <img
                src={banner}
                alt="Banner"
                style={{
                    width: '150px', // Original size
                    height: 'auto',
                }}
            />

            {/* Signature */}
            <img
                src={signature}
                alt="Signature"
                style={{
                    position: 'absolute', // Position the signature relative to the header
                    bottom: '10px', // Distance from the bottom edge
                    right: '10px', // Distance from the right edge
                    width: '75px', // Smaller size
                    height: 'auto',
                    pointerEvents: 'none', // Prevent interaction with the signature
                }}
            />

            {/* Hand-drawn Line Image */}
            
           
    </header>
    );


}

export default Header;