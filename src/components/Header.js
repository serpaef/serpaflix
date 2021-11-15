import React from 'react';
import { Nav } from 'react-bootstrap';

function Header() {
  return (
    <Nav>
      <Nav.Item className="header">
        <Nav.Link href="/" className="logo">SERPAFLIX</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Header
