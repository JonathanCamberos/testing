// SplitLayout.js

import React from 'react';
import './../../../App.css'; // Import the CSS file for styling
import LeftSide from '../Columns/LeftSide';
import RightSide from '../Columns/RightSide';

function SplitLayout() {
  return (
    <div className="split-container">
        
      <LeftSide />
      <RightSide />

    </div>
  );
}

export default SplitLayout;