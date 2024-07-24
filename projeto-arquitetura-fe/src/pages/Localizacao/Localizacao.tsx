import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './localizacao.css';

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

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location')
      .then(response => {
        setLocations(response.data.results);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch locations');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="locations">
      <h2 className="title-name">Localizações</h2>
      <ul className="location-list">
        {locations.map(location => (
          <li key={location.id} className="location-item">
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
