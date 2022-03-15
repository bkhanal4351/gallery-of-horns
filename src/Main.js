import React from 'react';
import Hornedbeast from './Hornedbeast';


class Main extends React.Component {
  render() {
    return (
        <main>
    <h2>Images of horned beast</h2>
    <Hornedbeast 
    title= "First Image" 
    imageUrl="https://h7.alamy.com/comp/3/be1c79888ad54ffa974182bbaff0a0ac/fy3d9m.jpg"
     description="Wildebeest" />

    <Hornedbeast 
    title= "Second Image" 
    imageUrl="https://h7.alamy.com/comp/3/3ae2b21e3dd244e1b4700caeac2a05ae/cwtycg.jpg" 
    description="Argali" />

        </main>
    );
  }
}

export default Main;