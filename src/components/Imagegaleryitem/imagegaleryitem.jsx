import Modal from 'components/Modal/modal';

const { Component } = require('react');

class ImagesGalleryItem extends Component {
  state = {
    isOpen: false,
  };
  // modalOpen = () => {
  //   this.setState({ isOpen: true });
  // };

  // modalClose = () => {
  //   this.setState({ isOpen: false });
  // };

  render() {
    const { id, webformatURL, alt, largeImageURL } = this.props;
    return (
      <>
        <li
          onClick={this.modalOpen}
          key={id}
          // className="gallery-item"
        >
          <img src={webformatURL} alt={alt} />
        </li>
        {this.state.isOpen && <Modal largeImageURL={largeImageURL} />}
      </>
    );
  }
}
export default ImagesGalleryItem;
