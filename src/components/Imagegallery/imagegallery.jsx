import ImagesGalleryItem from '../Imagegaleryitem/imagegaleryitem';

const { Component } = require('react');

class ImagesGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <ul
      // className="gallery"
      >
        {images.map(image => {
          const { id, webformatURL, tags, largeImageURL } = image;
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
