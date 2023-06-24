import SearchBar from './Searchbar/searchbar';
import Button from './Button/button';
import ImageGallery from './Imagegallery/imagegallery';
import { fetchPhotos, LIMIT } from '../ImagesAPI/pixabayApi';
import { Component } from 'react';
import Loader from './Leader/leader';

export class App extends Component {
  state = {
    images: [],
    searchValue: '',
    currentPage: 0,
    isLoading: false,
    error: null,
    totalPages: 0,
  };

  getData = event => {
    event.preventDefault();
    const searchWord = event.target.search.value;
    if (searchWord !== this.state.searchValue) {
      this.setState({
        searchValue: searchWord,
        currentPage: 1,
        images: [],
      });
    }
  };

  nextPage = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchValue, currentPage } = this.state;

    if (
      searchValue !== prevState.searchValue ||
      currentPage !== prevState.currentPage
    ) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    const { searchValue, currentPage } = this.state;

    try {
      this.setState({ isLoading: true });
      const object = await fetchPhotos(searchValue, currentPage);
      const newImages = object.hits;
      const totalPagesOfImages = Math.ceil(object.totalHits / LIMIT);

      this.setState(prevState => ({
        images: [...prevState.images, ...newImages],
        isLoading: false,
        totalPages: totalPagesOfImages,
      }));
    } catch (error) {
      this.setState({
        error,
        isLoading: false,
      });
    }
  };

  render() {
    const { isLoading, images, currentPage, totalPages } = this.state;
    return (
      <div className="App">
        <SearchBar getData={this.getData} />
        {images.length !== 0 && <ImageGallery images={images} />}
        {isLoading ? <Loader /> : true}
        {images.length !== 0 && currentPage !== totalPages && (
          <Button nextPage={this.nextPage} />
        )}
      </div>
    );
  }
}

export default App;