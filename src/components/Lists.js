import React, { useState } from 'react';
import './Lists.css';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function Lists({ Movies }) {
  const [position, setPosition] = useState(-500);

  const handleLeft = () => {
    let pos = position + 150;
    if (pos > 0) pos = 0;
    setPosition(pos);
  }

  const handleRight = () => {
    let pos = position - 150;
    setPosition(pos);
  }

  return (
    <section className="lists">
      { Movies && Movies.map(({ title, items: { results } }, index) => (
        <div className="listCarrousel" key={index}>
          <h2>{ title }</h2>
          <div className="listLeft">
            <ChevronLeftIcon style={{fontSize: 40}} onClick={ handleLeft }/>
          </div>
          <div className="listRight">
            <ChevronRightIcon style={{fontSize: 40}} onClick={ handleRight }/>
          </div>
          <div className="listArea">
            <div className="listRow" style={{width: 'max-content', marginLeft: position}}>
              { results.length && results.map((movie, index) => (
                <div className="movieCard" key={index}>
                  <img src={ `https://image.tmdb.org/t/p/w200${ movie.poster_path }` } alt={ movie.original_name } />
                </div>
              )) }
            </div>
          </div>
        </div>
      )) }
    </section>
  )
}

export default Lists
