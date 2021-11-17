import React, { useEffect, useState } from 'react'
import getLists, { fetchFeaturedInfo } from '../api/tmdb'
import Featured from '../components/Featured';
import Lists from '../components/Lists';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  const [list, setList] = useState([]);
  const [featured, setFeatured] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const loadLists = async () => {
      const results = await getLists();
      setList([...results]);

      const randomFeatured = results[0].items.results[
        Math.floor(
          Math.random() * results[0].items.results.length
        )
      ].id;

      const selectedFeatured = await fetchFeaturedInfo(randomFeatured, 'tv');

      setFeatured(selectedFeatured);
    }

    loadLists();
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      window.scrollY > 20 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  return (
    <div className="home">
      <Header Scrolled={ scrolled } />
      { featured && <Featured Data={ featured } /> }
      <Lists Movies={ list } />
      <Footer />
    </div>
  )
}

export default Home
