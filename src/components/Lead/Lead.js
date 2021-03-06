import './Lead.css';
import Card from '../Card/Card';

function Lead({ cards, onSelect, isSelectedCard, filteredСards }) {

const cardsToRender = isSelectedCard ? filteredСards : cards;

  return (
    <section className='lead'>
      <h1 className='lead__title'>Ты&nbsp;сегодня покормил&nbsp;кота?</h1>
      <ul className='lead__cards'>
        {cardsToRender.map((card) =>
          <Card
            key={card.id}
            cardId={card.id}
            card={card.card}
            product={card.product}
            portions={card.portions}
            mouse={card.mouse}
            result={card.result}
            quantity={card.quantity}
            description={card.description}
            weight={card.weight}
            onSelect={onSelect}
            selected={card.selected}
          />
        )}
      </ul>
    </section>
  );
}

export default Lead;
