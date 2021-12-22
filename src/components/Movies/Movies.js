import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './Movies.css'

function Movies() {
    return(
        <section className='movies'>
            <SearchForm />
            <MoviesCardList place='all-movies' />
        </section>
    );
}

export default Movies;