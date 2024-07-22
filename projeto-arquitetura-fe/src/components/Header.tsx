import React from 'react';
import './Header.css';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div>
          <h1>{title}</h1>
          {subtitle && <h2>{subtitle}</h2>}
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
