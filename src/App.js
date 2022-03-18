import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
 import SelectedBeast from './SelectedBeast.js';
import Data from './data.json';
import { Form, Button } from 'react-bootstrap';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SelectedBeast: {},
      showModal: false,
      hornNumber: Data



    }
  };

  handleSelect = (e) => {
 
    let selected = parseInt(e.target.value);

    let beastNum = Data.filter(hornNumber => hornNumber.horns ===selected)
    this.setState({hornNumber: beastNum});
   
    
    
 
    
  }

  handleModal = () => {
    this.setState({
      showModal: true,
    });
  };

  hideModal = () => {
    this.setState({
      showModal: false,
    })
  }

  stateFunction = (title) => {
    let thisBeast = Data.find(beast => beast.title === title)
    this.setState({
      SelectedBeast: thisBeast
    })
  }








  render() {

    return (
      <>
      <Header/>
       
       <p>Select the number of horns you would like to see from drop down</p>
        <Form>
              
             
      
                <Form.Select name="selected" onChange={this.handleSelect}>

                  <option> Select a number from dropdown </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="100">Hundred</option>
                </Form.Select>
              

             
            </Form>
        
        <Main
          Data={Data}
          stateFunction={this.stateFunction}
         handleModal = {this.handleModal}
         hornNumber= {this.state.hornNumber}
        
          />

        <SelectedBeast
          theBeast={this.state.SelectedBeast}
          showModal = {this.state.showModal}
          hideModal = {this.hideModal}

        />
        <Footer />


      </>
    );
  };
};
export default App;

