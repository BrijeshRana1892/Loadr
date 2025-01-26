import React from 'react';
import Logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="/">
          <img src={Logo} alt="Loadr Logo" />
          <h1>Loadr</h1>
        </a>
      </div>
    </header>
  );
};

export default Header;
