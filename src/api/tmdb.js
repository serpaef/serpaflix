const API_KEY = '611bf34e150724343ff0620df9ff26c9';
const API_BASE = 'https://api.themoviedb.org/3';

async function fetchApi(endpoint) {
  const resolve = await fetch(`${API_BASE}${endpoint}&api_key=${API_KEY}`);
  const result = await resolve.json();
  return result;
}

export default async function getLists() {
  return [
    {
      key: 'netflix',
      title: 'Netflix',
      items: await fetchApi('/discover/tv?with_network=213'),
    },
    {
      key: 'amazonPrime',
      title: 'Amazon Prime',
      items: await fetchApi('/discover/tv?with_network=1024'),
    },
    {
      key: 'trending',
      title: 'Trending',
      items: await fetchApi('/trending/all/week?'),
    },
    {
      key: 'topRated',
      title: 'Top Rated',
      items: await fetchApi('/movie/top_rated?'),
    },
    {
      key: 'horror',
      title: 'Horror',
      items: await fetchApi('/discover/movie?with_genres=27'),
    },
    {
      key: 'animation',
      title: 'Animation',
      items: await fetchApi('/discover/tv?with_genres=16'),
    },
    {
      key: 'action',
      title: 'Action',
      items: await fetchApi('/discover/movie?with_genres=28'),
    },
    {
      key: 'fantasy',
      title: 'Fantasy',
      items: await fetchApi('/discover/movie?with_genres=14'),
    },
    {
      key: 'docs',
      title: 'Documentary',
      items: await fetchApi('/discover/movie?with_genres=99'),
    },
  ];
}
