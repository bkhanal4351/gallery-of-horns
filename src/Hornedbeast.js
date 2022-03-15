import React from 'react';

class Hornedbeast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      votes:0
    }
  }

  render(){
    return (
    <div>
      <h3>{this.props.title}</h3>
      <img src={this.props.imageUrl} alt = 'Horned Beast images' ></img>
      <p> {this.props.description}</p>
    </div>
  )
  }

}

export default Hornedbeast;