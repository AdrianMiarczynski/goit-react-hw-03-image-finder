import Modal from 'components/Modal/modal';
import css from './imagegaleryitem.module.css';
import PropTypes from 'prop-types';

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
        <li onClick={this.modalOpen} key={id} className={css.ImageGalleryItem}>
          <img
            src={webformatURL}
            alt={alt}
            className={css['ImageGalleryItem-image']}
          />
        </li>
        {this.state.isOpen && <Modal largeImageURL={largeImageURL} />}
      </>
    );
  }
}
export default ImagesGalleryItem;

ImagesGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string,
  alt: PropTypes.object,
  largeImageURL: PropTypes.string,
};
