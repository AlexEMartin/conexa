
const fetchCharacters = (page = 1) => fetch('https://rickandmortyapi.com/api/character?page=' + page).then((res) => res.json());

export default fetchCharacters;