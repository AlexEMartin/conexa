const fetchEpisodes = () => fetch('https://rickandmortyapi.com/api/episode').then((res) => res.json());

export default fetchEpisodes;