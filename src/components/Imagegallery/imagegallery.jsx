import ImagesGalleryItem from '../Imagegaleryitem/imagegaleryitem';
import css from './imagegallery.module.css';
import PropTypes from 'prop-types';

const { Component } = require('react');

class ImagesGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <ul className={css.ImageGallery}>
        {images.map(image => {
          const { id, webformatURL, tags } = image;
          return (
            <ImagesGalleryItem
              key={id}
              id={id}
              webformatURL={webformatURL}
              tags={tags}
            />
          );
        })}
      </ul>
    );
  }
}
export default ImagesGallery;

ImagesGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
