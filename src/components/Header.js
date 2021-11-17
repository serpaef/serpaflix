import React from 'react';
import './Header.css'

function Header({Scrolled}) {
  //TODO: transição mais suave do background
  return (
    <header className={ Scrolled ? 'scrolled' : '' }>
      <h1>SERPAFLIX</h1>
    </header>
  );
}

export default Header
