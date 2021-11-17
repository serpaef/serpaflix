import React, { useEffect, useState } from 'react'
import getLists from '../api/tmdb'
import Featured from '../components/Featured';
import Lists from '../components/Lists';

function Home() {
  const [list, setList] = useState([]);
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    const loadLists = async () => {
      const results = await getLists();
      setList([...results]);

      const randomFeatured = 
        results[0]
          .items.results[
            Math.floor(
              Math.random() * results[0].items.results.length
            )
          ];

      setFeatured(randomFeatured);
    }

    loadLists();
  }, [])

  return (
    <div className="home">
      {featured && <Featured Data={ featured }/> }
      <Lists Movies={list} />
    </div>
  )
}

export default Home
