import React from 'react';
import './Header.css';

interface HeaderProps {
  imageSrc: string;
}

const Header: React.FC<HeaderProps> = ({ imageSrc }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div>
          <img src={imageSrc} alt="Logo" className="header-image" />
        </div>
        <nav className="nav">
          <ul>
            <li><a href="home">Home</a></li>
            <li><a href="personagens">Personagens</a></li>
            <li><a href="episodios">Episódios</a></li>
            <li><a href="localizacao">Localizações</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
