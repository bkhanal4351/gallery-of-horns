import React from 'react';
import Hornedbeast from './Hornedbeast';
import './Main.css';


class Main extends React.Component {
  render() {
  
    
    let horns= this.props.Data.map((beast, index) => {
        return(
        <Hornedbeast
          imageUrl={beast.image_url}
          title={beast.title}
          description={beast.description}
          keyword={beast.keyword}
          horns={beast.horns}
          key={index}
          handleModal = {this.props.handleModal}
          hideModal= {this.props.hideModal}
          stateFunction={this.props.stateFunction}
        />

    )})
    return (
      <main>
        
{horns}

        

      </main>
    );
  }
}

export default Main;