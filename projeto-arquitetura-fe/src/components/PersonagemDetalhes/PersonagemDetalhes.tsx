// PersonagemDetalhes.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PersonagemDetalhes.css';

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

interface CharacterDetails {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  location: {
    name: string;
  };
  episode: string[];
}

const PersonagemDetalhes: React.FC = () => {
  const [character, setCharacter] = useState<CharacterDetails | null>(null);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const characterId = window.location.pathname.split('/').pop(); // Obtendo o ID da URL

  useEffect(() => {
    if (characterId) {
      axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then(response => {
          setCharacter(response.data);
          // Fetching episodes data
          const episodePromises = response.data.episode.map((episodeUrl: string) => axios.get(episodeUrl));
          Promise.all(episodePromises)
            .then(responses => {
              setEpisodes(responses.map(response => response.data));
              setLoading(false);
            })
            .catch(() => {
              setError('Falha em carregar o Personagem.');
              setLoading(false);
            });
        })
        .catch(() => {
          setError('Falha em carregar o Personagem.');
          setLoading(false);
        });
    }
  }, [characterId]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <div className="personagem-detalhes">
      <div className="character-info">
        <div className="character-details">
          <h2 className='title-name'>Detalhes do Personagem</h2>
          <h2>{character.name}</h2>
          <p><strong>Espécie:</strong> {character.species}</p>
          <p><strong>Status:</strong> {character.status}</p>
          <p><strong>Última Localização:</strong> {character.location.name}</p>
        </div>
        <div className="character-image">
          <img src={character.image} alt={character.name} />
        </div>
      </div>
      <div className="episode-section">
        <div className="episodes">
        <h3>{character.name} aparece nos seguintes episódios:</h3>
        <ul className="episode-list">
          {episodes.map(episode => (
            <li key={episode.id} className="episode-item">
              <h3>{episode.name}</h3>
              <p><b>Episódio:</b> {episode.episode}</p>
              <p><b>Data Exibição:</b> {episode.air_date}</p>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonagemDetalhes;
