import React from 'react';
import './Card.css';

interface CardProps {
  name: string;
  image: string;
  species: string;
  status: string;
  location: string;
}

const Card: React.FC<CardProps> = ({ name, image, species, status, location }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h3>{name}</h3>
      <p><strong>Espécies:</strong> {species}</p>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Última Localização:</strong> {location}</p>
    </div>
  );
};

export default Card;
