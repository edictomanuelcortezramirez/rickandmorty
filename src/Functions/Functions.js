import axios from 'axios';

const allCharacters = async (state) => {
  const request = await axios.get('https://rickandmortyapi.com/api/character');
  state(request.data.results);
};

const allEpisodes = async (state) => {
  const request = await axios.get('https://rickandmortyapi.com/api/episode');
  state(request.data.results);
};

export { allCharacters, allEpisodes };
