const API_KEY = '611bf34e150724343ff0620df9ff26c9';
const API_BASE = 'https://api.themoviedb.org/3';

async function fetchApi(endpoint) {
  const resolve = await fetch(`${API_BASE}${endpoint}&api_key=${API_KEY}`);
  const result = await resolve.json();
  return result;
}

export async function fetchFeaturedInfo(id, type) {
  let info = {};
  if (id) {
    switch(type) {
      case 'movie':
        info = await fetchApi(`/movie/${id}?api_key=${API_KEY}`);
        return info;
      case 'tv':
        info = await fetchApi(`/tv/${id}?api_key=${API_KEY}`);
        return info;
      default:
        break;
    }
  }
}

export default async function getLists() {
  return [
    {
      key: 'streaming',
      title: 'Streaming',
      items: await fetchApi('/discover/tv?with_network=213'),
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
