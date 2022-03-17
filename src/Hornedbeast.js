import React from 'react';
import './Hornedbeast.css';
import Card from 'react-bootstrap/Card';

class Hornedbeast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      favorite:0
    }
  }



  handleClick = () => {
    this.setState({
      favorite: this.state.favorite + 1
    });
    this.props.stateFunction(this.props.title);
    this.props.handleModal();
  }
  onImageClicked = () =>{
    
  }

  render(){
    return (
      <Card>
    <article>
    
      <h3>{this.props.title}</h3>
      <img src={this.props.imageUrl} alt = 'Horned Beast images' onClick={this.handleClick} ></img>
      <p>
        {this.state.favorite} 
        💜
      </p>
      
      <p> {this.props.description}</p>
    </article>
    </Card>
  )
  }

}

export default Hornedbeast;