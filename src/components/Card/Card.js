import './Card.css';
import Cat from '../../image/cat.png'

function Card({ card, product, portions, mouse, result, indexCard/*, quantity*/, description, weight }) {
  {/*`card__border ${selectedCards ? 'card__border_style_pink' : 'card__border_style_blue'}`*/ }
  return (
    <div className='card'>
      <div className='card__border card__border_hover card__border_disabled'>
        <div className='card__container card__container_disabled'>
          <div className='card__box-info'>
            <p className='card__subtitle'>Сказочное заморское яство</p>
            <h2 className='card__title'>Нямушка <span className='card__title_type_product'>с&nbsp;{product}</span></h2>
            <div className='card__data'>
              <p className='card__info'>{portions} порций</p>
              <p className='card__info'>{mouse} в подарок</p>
              <p className='card__info'>{result}</p>
            </div>
          </div>
          <img className='card__img' alt='Голодный кот' src={Cat} />
          <div className='card__box-weight card__box-weight_disabled'>
            <p className='card__weight card__weight_type_number'>{weight}</p>
            <p className='card__weight'>кг</p>
          </div>
        </div>
      </div>
      <p className='card__signature'>{description}{/*Чего сидишь? Порадуй котэ, купи*/}</p>
    </div>
  );
}

export default Card;
