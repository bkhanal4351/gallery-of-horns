import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
// import SelectedBeast from './SelectedBeast.js';
import Data from './data.json';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     SelectedBeast: {},
  //     showModal: false,



  //   }
  // };

  // showModal = () => {
  //   this.setState({
  //     showModal: true,
  //   });
  // };

  // hideModal = () => {
  //   this.setState({
  //     showModal: false,
  //   })
  // }

  // stateFunction = (title) => {
  //   let thisBeast = Data.find(beast => beast.title === title)
  //   this.setState({
  //     SelectedBeast: thisBeast
  //   })
  // }








  render() {

    return (
      <>
        <Header />
        <Main
          Data={Data}
          openModal={this.openModal}
          // stateFunction={this.stateFunction} 
          />

        {/* <SelectedBeast
          theBeast={this.state.SelectedBeast}
          showModal = {this.state.showModal}
          hideModal = {this.hideModal}

        /> */}
        <Footer />


      </>
    );
  };
};
export default App;

