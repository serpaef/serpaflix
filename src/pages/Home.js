import React, { useEffect, useState } from 'react'
import getLists from '../api/tmdb'
// import Header from '../components/Header'
import Lists from '../components/Lists';

function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const loadLists = async () => {
      const results = await getLists();
      setList([...results]);
    }

    loadLists();
  }, [])

  console.log(list);

  return (
    <div className="home">
      {/* <Header /> */}
      <Lists Movies={list} />
      {/* <Featured />
      <Lists />
      <Footer /> */}
    </div>
  )
}

export default Home
