import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  imageSrc: string;
}

const Header: React.FC<HeaderProps> = ({ imageSrc }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-content">
        <div>
          <img src={imageSrc} alt="Logo" className="header-image" />
        </div>
        <nav className="nav">
          <ul>
            <li><button onClick={() => navigate('/home')}>Home</button></li>
            <li><button onClick={() => navigate('/personagens')}>Personagens</button></li>
            <li><button onClick={() => navigate('/episodios')}>Episódios</button></li>
            <li><button onClick={() => navigate('/localizacao')}>Localização</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
