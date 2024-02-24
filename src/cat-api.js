import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_5rn1pWVbmmvedSDfbp5jRPCStEEjPjkUk0kaBngdGCBfBzNOMC2DHzVT3HYhIZ3X';

const BASE_URL = `https://api.thecatapi.com/v1/`;

function fetchBreeds() {
  return axios
    .get(BASE_URL + 'breeds')
    .then(({ data }) => data)
    .catch(error => error);
}

function fetchCatByBreed(breed) {
  return axios
    .get(BASE_URL + `images/search?breed_ids=${breed}`)
    .then(({ data }) => data)
    .catch(error => error);
}

module.exports = {
  fetchBreeds,
  fetchCatByBreed,
};
