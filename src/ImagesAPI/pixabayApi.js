import axios from 'axios';

const API_KEY = `35854690-4159d3cc03f107c66dd11036d`;
const API_URL = 'https://pixabay.com/api/';
export const LIMIT = 12;

export const fetchPhotos = async searchValue => {
  try {
    const objects = await axios.get(API_URL, {
      params: {
        key: API_KEY,
        q: searchValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: 1,
        per_page: LIMIT,
      },
    });
    const images = objects.data;
    return images;
  } catch (error) {
    this.setState({ error });
  }
};
