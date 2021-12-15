import promoImage from '../../images/landing-logo.svg'

import './Promo.css';

function Promo() {
    return (
      <section className='promo'>
        <div className='promo__container'>
          <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
          <div className='promo__curve'>
            <img className='promo__curve-image' src={promoImage} alt='кривая линия' />
          </div>
        </div>
      </section>
    );
}

export default Promo;