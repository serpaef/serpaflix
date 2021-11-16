import React, { useState } from 'react'
import './Carrousel.css';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

//Foi necessário componentizar cada carrossel para que cada um tivesse um estado exclusivo

function Carrousel({Title, Results}) {
  const [position, setPosition] = useState(-450);

  const handleLeft = () => {
    let pos = position + (window.innerWidth / 4);
    if (pos > 0) pos = 0;
    setPosition(pos);
  }

  const handleRight = () => {
    let pos = position - (window.innerWidth / 4);
    const width = Results.length * 150;
    if(window.innerWidth - width > pos) pos = window.innerWidth - width - 50;
    setPosition(pos);
  }

  return (
    <div className="listCarrousel">
      <h2>{ Title }</h2>
      <div className="listLeft">
        <ChevronLeftIcon style={ { fontSize: 40 } } onClick={ handleLeft } />
      </div>
      <div className="listRight">
        <ChevronRightIcon style={ { fontSize: 40 } } onClick={ handleRight } />
      </div>
      <div className="listArea">
        <div className="listRow" style={ { width: 'max-content', marginLeft: position } }>
          { Results.length && Results.map((movie, index) => (
            <div className="movieCard" key={ index }>
              <img src={ `https://image.tmdb.org/t/p/w200${ movie.poster_path }` } alt={ movie.original_name } />
            </div>
          )) }
        </div>
      </div>
    </div>
  )
}

export default Carrousel
