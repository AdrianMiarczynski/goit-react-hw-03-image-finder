const { Component } = require('react');

class Modal extends Component {
  render() {
    const { largeImageURL, modalClose, tags } = this.state;
    return (
      <div
        onClick={modalClose}
        // classNames="overlay"
      >
        <div
        // className="modal"
        >
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}
export default Modal;
