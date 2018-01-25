import React from 'react';
import Modal from 'react-modal';
import PreviewPicture from './PreviewPicture';
import ModalForm from './ModalForm';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: '100px',
    left: '150px',
    right: '150px',
    bottom: '100px',
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    right: '20px',
    bottom: '20px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '10px'
  }
};

export default class DogModal extends React.Component {
  render() {
    if (!this.props.selectedDog) {
      return <div />;
    } else {
      const { picture, userUid } = this.props.selectedDog;
      return (
        <Modal
          isOpen={this.props.modalIsOpen}
          style={customStyles}
          ariaHideApp={false}
          onRequestClose={() => this.props.onRequestClose()}
        >
          <div className="dog-modal">
            <div className="text-center">
              <PreviewPicture pictureUrl={picture} />
            </div>
            <div className="text-center">
              <ModalForm
                onRequestClose={this.props.onRequestClose}
                ownerUid={userUid}
                selectedDog={this.props.selectedDog}
              />
              <button
                className="btn btn-primary mb-3"
                onClick={() => this.props.onRequestClose()}
              >
                close
              </button>
            </div>
          </div>
        </Modal>
      );
    }
  }
}
