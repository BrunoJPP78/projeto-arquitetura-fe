import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LocalizacaoDetalhes.css';
import Card from '../Card/Card';

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  location: {
    name: string;
  };
}

interface LocationDetails {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}

const LocalizacaoDetalhes: React.FC = () => {
  const [location, setLocation] = useState<LocationDetails | null>(null);
  const [residents, setResidents] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const locationId = window.location.pathname.split('/').pop();

  useEffect(() => {
    if (locationId) {
      axios.get(`https://rickandmortyapi.com/api/location/${locationId}`)
        .then(response => {
          setLocation(response.data);
          const residentPromises = response.data.residents.map((url: string) => axios.get(url));
          Promise.all(residentPromises)
            .then(responses => {
              setResidents(responses.map(res => res.data));
              setLoading(false);
            })
            .catch(() => {
              setError('Failed to fetch residents');
              setLoading(false);
            });
        })
        .catch(() => {
          setError('Failed to fetch location details');
          setLoading(false);
        });
    }
  }, [locationId]);

  if (loading) {
    return <div className="spinner"></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!location) {
    return <div>Location not found</div>;
  }

  return (
    <div className="localizacao-detalhes">
      <div className="location-info">
        <h2 className='title-name'>Detalhes da Localização</h2>
        <h3><b>{location.name}</b></h3>
        <p><strong>Tipo:</strong> {location.type}</p>
        <p><strong>Dimensão:</strong> {location.dimension}</p>
      </div>
      <div className="residents-section">
        <h3 className='residente_h3'>Residentes:</h3>
        <div className="residents">
          {residents.map(resident => (
            <Card
              key={resident.id}
              name={resident.name}
              image={resident.image}
              species={resident.species}
              status={resident.status}
              location={resident.location.name}
              onClick={() => window.location.href = `/personagens/${resident.id}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocalizacaoDetalhes;
