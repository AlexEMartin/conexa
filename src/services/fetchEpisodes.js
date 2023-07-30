const fetchEpisodes1 = () => fetch('https://rickandmortyapi.com/api/episode').then((res) => res.json());

const fetchEpisodes2 = () => fetch('https://rickandmortyapi.com/api/episode?page=2').then((res) => res.json());

const fetchEpisodes3 = () => fetch('https://rickandmortyapi.com/api/episode?page=3').then((res) => res.json());

export {
    fetchEpisodes1,
    fetchEpisodes2,
    fetchEpisodes3
}