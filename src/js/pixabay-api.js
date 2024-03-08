import axios from 'axios';

export default searchImages;

async function searchImages(tagImage) {

    axios.defaults.baseURL = 'https://pixabay.com/api/';

    const searchParams = {
        params: {
            key: '42601887-7c2d316803b73c9107fd5176e',
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true',
            q: `${tagImage}`,
        }
    }

    const response = await axios.get('', searchParams);
        return response.data;
}