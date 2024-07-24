// Episodios.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Episodios.css';

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

const Episodios: React.FC = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode')
      .then(response => {
        setEpisodes(response.data.results);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch episodes');
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
    <div className="episodes">
      <h2 className="title-name">Episódios</h2>
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
  );
};

export default Episodios;
