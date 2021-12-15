import design from '../../images/designFilm.png';
import bank from '../../images/BanksyFilm.png';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ place }) {
  return (
    <section className='movies-card-list'>
      <MoviesCard
        movie={{
          src: design,
          title:
            '33 слова о дизайне',
          length: '1ч 42м',
        }}
        place={place}
        isSaved={true}
      />
      <MoviesCard
        movie={{
          src: bank,
          title: 'В погоне за Бенкси',
          length: '1ч 42м',
        }}
        place={place}
        isSaved={false}
      />
      <button className='movies-card-list__more'>Ещё</button>
    </section>
  );
}

export default MoviesCardList;