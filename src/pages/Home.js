import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import getLists from '../api/tmdb'

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
    <div className="main">
      <Header />
      {/* <Featured />
      <Lists />
      <Footer /> */}
    </div>
  )
}

export default Home
