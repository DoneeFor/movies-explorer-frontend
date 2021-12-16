import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './Movies.css'

function Movies() {
    return(
        <section className='movies'>
            <SearchForm />
            <Preloader />
            <MoviesCardList place='all-movies' />
        </section>
    );
}

export default Movies;