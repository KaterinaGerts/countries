import axios from 'axios';
// console.dir(axios);

function getAxiosFetch(url, key, create, place) {
  axios.defaults.headers.Authorization = key;
  axios.get(url)
  .then(response => {
    console.log(response.data.photos);
    const images = create(response.data.photos);
    place.before(...images);
  })
  };

  export default getAxiosFetch;