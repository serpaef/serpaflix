import React from 'react';
import './Featured.css';

function Featured({ Data }) {
  console.log(Data);
  const yearRelease = new Date(Data.first_air_date);
  const genres = Data.genres.map((genre) => genre.name);

  return (
    <section
      className="featured"
      style={
        {
          backgroundImage: Data.backdrop_path
            ? `url(https://image.tmdb.org/t/p/original${ Data.backdrop_path })`
            : `url(https://image.tmdb.org/t/p/original${ Data.poster_path })`
        }
      }
    >
      <div className="bottomFade">
        <div className="sideFade">
          <h2 className="featuredTitle">{ Data.original_name }</h2>
          <div className="detailedInfo">
            <div className="voteAverage">Score: {Data.vote_average}</div>
            <div className="yearRelease">{ yearRelease.getFullYear() }</div>
            <div className="nSeasons">{Data.number_of_seasons} seasons</div>
          </div>
          <p className="overview">{ Data.overview }</p>
          <div className="buttons">
            <input className="watch" type="button" value="► Watch" />
            <input className="addList" type="button" value="+ My list" />
          </div>
          <span className="genres">Genres: { genres.join(', ') }</span>
        </div>
      </div>
    </section>
  )
}

export default Featured
