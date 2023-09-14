import React from 'react';

function Navigation() {
  return (
    <header>
      <nav>
        <img src="./react-logo.png" className="logo" />
        <ul className="nav__links">
          <li className="nav__link">Pricing</li>
          <li className="nav__link">About</li>
          <li className="nav__link">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
