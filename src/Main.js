import React from 'react';
import Hornedbeast from './Hornedbeast';
import './Main.css';


class Main extends React.Component {
  render() {
    console.log(this.props.Data);
    let animals = [];
    this.props.Data.forEach((beast, index) => {
      animals.push(
        <Hornedbeast
          imageUrl={beast.image_url}
          title={beast.title}
          description={beast.description}
          keyword={beast.keyword}
          horns={beast.horns}
          key={index}
        />

    )})
    return (
      <main>
        
{animals}

        

      </main>
    );
  }
}

export default Main;