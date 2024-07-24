import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './localizacao.css';
import { useNavigate } from 'react-router-dom';

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

const Localizacao: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location')
      .then(response => {
        setLocations(response.data.results);
        setLoading(false);
      })
      .catch(() => {
        setError('Falha ao buscar as localizações.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="spinner"></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleLocationClick = (id: number) => {
    navigate(`/localizacao/${id}`);
  };

  return (
    <div className="locations">
      <h2 className="title-name">Localizações</h2>
      <ul className="location-list">
        {locations.map(location => (
          <li key={location.id} className="location-item" onClick={() => handleLocationClick(location.id)}>
            <h3>{location.name}</h3>
            <p><b>Tipo:</b> {location.type}</p>
            <p><b>Dimensão:</b> {location.dimension}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Localizacao;
