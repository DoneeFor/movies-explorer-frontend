import "./AboutMe.css";
import image from "../../images/avatar.jpg";

function AboutMe() {
  return (
    <section className='about-me'  id='aboutMe'>
      <h2 className='section__title'>Студент</h2>
      <hr />
      <img className='about-me__image' alt='Фото студента' src={image} />
      <div className='about-me__info'>
        <h3 className='about-me__title'>Стёпа</h3>
        <p className='about-me__subtitle'>Фронтенд-разработчик, 23 года</p>
        <p className='about-me__paragraph'>
          Студент Яндекс.Практикума. Любитель искусства. Пишу и читаю книги в космическом масштабе. Увлекаюсь созданием видеоигр и музыки. Вкусная еда и хороший сон - мои лучшие друзья.
        </p>
        <ul className='about-me__social-links'>
          <li className='about-me__social-link'>
            <a href='https://www.facebook.com/stephan.stepanyan.5/' rel='noreferrer' target='_blank'>
              Facebook
            </a>
          </li>
          <li className='about-me__social-link'>
            <a href='https://github.com/DoneeFor' rel='noreferrer' target='_blank'>
              Github
            </a>
          </li>
        </ul>
      </div>

      <div className='about-me__portfolio'>
        <h4 className='about-me__portfolio-title'>Портфолио</h4>
        <ul className='about-me__portfolio-links'>
          <li className='about-me__portfolio-link'>
            <a href='https://github.com/DoneeFor/how-to-learn' rel='noreferrer' target='_blank'>
              Статичный сайт
            </a>
          </li>
          <li className='about-me__portfolio-link'>
            <a href='https://github.com/DoneeFor/russian-travel' rel='noreferrer' target='_blank'>
              Адаптивный сайт
            </a>
          </li>
          <li className='about-me__portfolio-link'>
            <a href='http://steppfor.student.nomoredomains.work/' rel='noreferrer' target='_blank'>
              Одностраничное приложение
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
