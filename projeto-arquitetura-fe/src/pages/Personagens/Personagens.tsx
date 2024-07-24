import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/Card/Card';
import '../Personagens/Personagens.css';
import { useNavigate } from 'react-router-dom';

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

const Personagens: React.FC = () => {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setCharacters(response.data.results);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch characters');
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
    <div className="personagens">
      <h2 className='title-name'>Personagens</h2>
      <div className="card-container">
        {characters.map(character => (
          <Card
            key={character.id}
            name={character.name}
            image={character.image}
            species={character.species}
            status={character.status}
            location={character.location.name}
            onClick={() => navigate(`/personagens/${character.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Personagens;
