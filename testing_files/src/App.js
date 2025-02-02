import React from 'react';
import './App.css'; 
import Header from './Components/Header/Header.js';
import Nav from './Components/Nav/Nav.js';
import LeftColumn from './Components/LeftColumn/LeftColumn.js';
import RightColumn from './Components/RightColumn/RightColumn.js';
import BlogPost from './Components/RightColumn/BlogPost.js';
import CenterPage from './Components/Center/SplitLayout/SplitLayout.js'
import Footer from './Components/Footer/Footer.js'

function App() {
  return (
      <div className="mainPage">      
        <Header />
        <Nav />
        
        <div style={{ display: 'flex' }}>
                <LeftColumn />
                <RightColumn />
            </div>
        <Footer />
      </div>       
  );
}

export default App;
