import './Card.css';
import Cat from '../../image/cat.png'

function Card({ card, product, portions, mouse, result, quantity, description, weight }) {

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

  /*function getDescription() {
    if(?) {
      return description;
    } else if(quantityProduct) {
      return description;
    } else {
      return `Печалька, c ${product} закончился.`
    }
  }*/

  return (
    <div className='card'>
      <div className={`card__border card__border_hover ${quantityProduct ? '' : 'card__border_disabled'}`}>
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
          <div className={`card__box-weight ${quantityProduct ? '' : 'card__box-weight_disabled'}`}>
            <p className='card__weight card__weight_type_number'>{weight}</p>
            <p className='card__weight'>кг</p>
          </div>
          <div className={quantityProduct ? '' : `card_disaibled`}></div>
        </div>

      </div>
      <p className='card__signature'>{quantityProduct ? description : `Печалька, c ${product} закончился.`}{/*Чего сидишь? Порадуй котэ, купи*/}</p>
    </div>
  );
}

export default Card;

