import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import Data from './data.json';

class App extends React.Component {
  render() {
    
    return (
      <>
        <Header/>
        <Main
        Data = {Data}/>
        <Footer/>
        
        
      </>
    );
  }
}

export default App;

