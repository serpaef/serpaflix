import React from 'react';
import Carrousel from './Carrousel';

function Lists({ Movies }) {
  return (
    <section className="lists">
      { Movies && Movies.map(({ title, items: { results } }, index) => (
        <Carrousel Title={title} Results={results} key={index} />
      )) }
    </section>
  )
}

export default Lists
