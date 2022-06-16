import './Lead.css';
import Card from '../Card/Card';
import dataCards from '../../utils/dataCards';

function Lead(/*{ cards }*/) {

  return (
    <section className='lead'>
      <h1 className='lead__title'>Ты&nbsp;сегодня покормил&nbsp;кота?</h1>
      <div className='lead__cards'>
        {dataCards.map((card) =>
          <Card
            key={card.id}
            card={card.card}
            product={card.product}
            portions={card.portions}
            mouse={card.mouse}
            result={card.result}
            /*quantity={card.quantity}*/
            description={card.description}
            weight={card.weight}
          />
        )}
      </div>
    </section>
  );
}

export default Lead;
