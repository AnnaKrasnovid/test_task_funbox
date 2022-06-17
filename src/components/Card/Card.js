import './Card.css';
import Cat from '../../image/cat.png'

function Card({ card, product, portions, mouse, result, quantity, description, weight, onSelect, isSelectedCard, cardId, selected }) {

  const numberOfMice = mouse !== 1 ? mouse : '';
  const quantityProduct = quantity === 0 ? false : true;

  function getMouse() {
    if (mouse === 1) {
      return 'мышь'
    } else if (mouse > 1 && mouse < 5) {
      return 'мыши'
    } else if (mouse >= 5) {
      return 'мышей'
    } else {
      return 'нет мышей'
    }
  }

  function getStateCard() {
    if (quantity === 0) {
      return 'card__border card__border_type_disabled'
    }
    return `card__border ${selected ? 'card__border_type_selected' : 'card__border_type_default'}`
  }

  function getStateBoxWeight() {
    if (quantity === 0) {
      return 'card__box-weight card__box-weight_type_disabled'
    }
    return `card__box-weight ${selected ? 'card__box-weight_type_selected' : 'card__box-weight_type_default'}`
  }

  function handleClick() {
    if (quantity === 0) {
      return;
    }
    onSelect(cardId);
  }

  function getSignature() {
    if (!selected) {
      return (
        <p className='card__signature'>
          Чего сидишь? Порадуй котэ,
          <span className='card__signature_type_buy' onClick={handleClick}> купи</span>
        </p>
      )
    } else {
      return (<p className='card__signature'>{description}</p>)
    }
  }

  return (
    <div className='card' >
      <div className={getStateCard()} onClick={handleClick} >
        <div className='card__container'>
          <div className='card__box-info'>
            <p className='card__subtitle'>Сказочное заморское яство</p>
            <h2 className={`card__title ${quantityProduct ? '' : 'card__title_disabled'}`}>
              Нямушка
              <span className='card__title_type_product'> с&nbsp;{product}</span>
            </h2>
            <div className='card__data'>
              <p className='card__info'>
                <span className='card__info_type_weight'>{portions} </span>
                порций
              </p>
              <p className='card__info'>
                <span className='card__info_type_weight'>{numberOfMice} </span>
                {getMouse()} в подарок
              </p>
              <p className='card__info'>{result}</p>
            </div>
          </div>
          <img className='card__img' alt='Голодный кот' src={Cat} />
          <div className={getStateBoxWeight()}>
            <p className='card__weight card__weight_type_number'>{weight}</p>
            <p className='card__weight'>кг</p>
          </div>
          <div className={quantityProduct ? '' : `card_disaibled`}></div>
        </div>

      </div>
      {
        quantityProduct ?
          getSignature() :
          <p className='card__signature card__signature_type_sold'>{`Печалька, c ${product} закончился.`}</p>
      }
    </div>
  );
}

export default Card;

