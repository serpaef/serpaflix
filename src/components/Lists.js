import React from 'react';
import './Lists.css';

function Lists({ Movies }) {
  return (
    <section className="lists">
      { Movies && Movies.map(({ title, items: { results } }, index) => (
        <div className="listCarrousel" key={index}>
          <h2>{ title }</h2>
          <div className="listArea">
            <div className="listRow">
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
