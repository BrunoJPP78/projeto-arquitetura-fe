import React from 'react';
import Card from '../Card/Card';
import './ContentBody.css';

const ContentBody: React.FC = () => {
  const cardsData = [
    { id: 1, title: 'Card 1', description: 'This is card 1' },
    { id: 2, title: 'Card 2', description: 'This is card 2' },
    { id: 3, title: 'Card 3', description: 'This is card 3' },
  ];

  return (
    <div className="content-body">
      <section id="characters">
        <h2>Personagens</h2>
        {cardsData.map(card => (
          <Card key={card.id} title={card.title} description={card.description} />
        ))}
      </section>
      <section id="episodes">
        <h2>Episódios</h2>
        {/* Add episode cards here */}
      </section>
      <section id="locations">
        <h2>Localizações</h2>
        {/* Add location cards here */}
      </section>
    </div>
  );
};

export default ContentBody;
