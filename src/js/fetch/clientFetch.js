import { createClient } from 'pexels';

function pexelsFetch(key, search, perPage, create, place) {
  const client = createClient(key);

  client.photos.search({query:search, per_page: perPage})
  .then(data => {
  console.log(data.photos);
  const images = create(data.photos);
  place.before(...images);
})
}

export default pexelsFetch;