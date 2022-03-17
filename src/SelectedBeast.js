
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button"

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.showModal} >
        <Modal.Header>
          <Button onclick={this.props.hideModal}>Close</Button>
        </Modal.Header>
        <Modal.Body>
          <img
          src={this.props.beast.image_url}
          alt={this.props.beast.title}></img>
          {this.props.beast.description}
        </Modal.Body>
        </Modal>
        );

}
}

        export default SelectedBeast;