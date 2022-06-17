import React from 'react';
import './App.css';
import Lead from '../Lead/Lead';
import dataCards from '../../utils/dataCards';

function App() {
  const [cards, setCards] = React.useState([]);
  const [availableСards, setAvailableСards] = React.useState([]);
  const [isSelectedCard, setIsSelectedCard] = React.useState(false);


  function getFilteredCards(cardId, cardList) {
    const filteredCards = cardList.map((card) => (card.id === cardId && card.quantity !== 0) ? { ...card, selected: !card.selected } : { ...card })
    setAvailableСards(filteredCards)
  }

  function handleToggleCardSelected(cardId) {
    const selectedRemove = availableСards.find((card) => card.id === cardId && card.selected === true)

    if(availableСards.length === 0) {
      getFilteredCards(cardId, cards)
      setIsSelectedCard(true)
    } else if(availableСards.length !== 0) {
      getFilteredCards(cardId, availableСards)
    } else if (selectedRemove) {
      getFilteredCards(cardId, availableСards)
    }
  }

  React.useEffect(() => {
    setCards(dataCards);
  }, [cards, availableСards])

  return (
    <main className='page'>
      <Lead cards={cards} availableСards={availableСards} onSelect={handleToggleCardSelected}  isSelectedCard={isSelectedCard} />
    </main>
  );
}

export default App;
