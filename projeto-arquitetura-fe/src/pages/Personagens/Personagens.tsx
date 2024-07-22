import React from 'react';
import Card from '../../components/Card/Card';
import '../Personagens/Personagens.css';

const Personagens: React.FC = () => {
  // Placeholder data for personagens
  const personagensData = [
    { id: 1, nome: 'Personagem 1', descricao: 'This is personagem 1' },
    { id: 2, nome: 'Personagem 2', descricao: 'This is personagem 2' },
    { id: 3, nome: 'Personagem 3', descricao: 'This is personagem 3' },
    // Add more personagem data as needed
  ];

  return (
    <div className="personagens">
      <h2>Personagens</h2>
      <div className="card-container">
        {personagensData.map(personagem => (
          <Card key={personagem.id} title={personagem.nome} description={personagem.descricao} />
        ))}
      </div>
    </div>
  );
};

export default Personagens;
