import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EpisodiosDetalhes.css';
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

interface EpisodeDetails {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}

const EpisodiosDetalhes: React.FC = () => {
  const [episode, setEpisode] = useState<EpisodeDetails | null>(null);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const episodeId = window.location.pathname.split('/').pop(); 

  useEffect(() => {
    if (episodeId) {
      axios.get(`https://rickandmortyapi.com/api/episode/${episodeId}`)
        .then(response => {
          setEpisode(response.data);

          const characterPromises = response.data.characters.map((characterUrl: string) => axios.get(characterUrl));
          Promise.all(characterPromises)
            .then(responses => {
              setCharacters(responses.map(response => response.data));
              setLoading(false);
            })
            .catch(() => {
              setError('Falha em carregar os detalhes do episódio.');
              setLoading(false);
            });
        })
        .catch(() => {
          setError('Falha em carregar os detalhes do episódio.');
          setLoading(false);
        });
    }
  }, [episodeId]);

  if (loading) {
    return <div className="spinner"></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!episode) {
    return <div>Episódio não encontrado</div>;
  }

  return (
    <div className="episodios-detalhes">
      <div className="episode-info">
        <h2 className="title-name">Detalhes do Episódio</h2>
        <h2>{episode.name}</h2>
        <p><strong>Data de Exibição:</strong> {episode.air_date}</p>
        <p><strong>Episódio:</strong> {episode.episode}</p>
      </div>
      <div className="characters-section">
        <h3>Personagens que aparecem no episódio:</h3>
        <div className="character-list">
          {characters.map(resident => (
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

export default EpisodiosDetalhes;
