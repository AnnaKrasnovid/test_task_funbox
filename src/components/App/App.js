import React from 'react';
import './App.css';
import Lead from '../Lead/Lead';
import dataCards from '../../utils/dataCards';

function App() {
  const [cards, setCards] = React.useState([]);
  const [filteredСards, setFilteredСards] = React.useState([]);
  const [isSelectedCard, setIsSelectedCard] = React.useState(false);

  React.useEffect(() => {
    setCards(dataCards);
  }, [cards])

  function toggleCardSelected(cardId, cardList) {
    const cards = cardList.map((card) => (card.id === cardId && card.quantity !== 0) ? { ...card, selected: !card.selected } : { ...card });
    setFilteredСards(cards);
  }

  function handleCardClick(cardId) {
    const selectedRemove = filteredСards.find((card) => card.id === cardId && card.selected === true);

    if(filteredСards.length === 0) {
      toggleCardSelected(cardId, cards);
      setIsSelectedCard(true);
    } else if(filteredСards.length !== 0) {
      toggleCardSelected(cardId, filteredСards);
    } else if (selectedRemove) {
      toggleCardSelected(cardId, filteredСards);
    }
  }

  return (
    <main className='page'>
      <Lead cards={cards} filteredСards={filteredСards} onSelect={handleCardClick}  isSelectedCard={isSelectedCard} />
    </main>
  );
}

export default App;
