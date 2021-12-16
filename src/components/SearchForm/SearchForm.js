import searchButton from '../../images/search-button.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import './SearchForm.css'

function SearchForm() {
    function handleSearch(e) {
        e.preventDefault();
        console.log('click search');
    }

    return (
        <form className='search-form'>
          <fieldset className='search-form__search'>
            <input
              className='search-form__input'
              placeholder='Фильм'
              type='search'
              required
            />
            <button className='search-form__button' onClick={handleSearch}>
              <img src={searchButton} alt='кнопка поиска' />
            </button>
          </fieldset>
          <FilterCheckbox label='Короткометражки' />
          <hr className='search-form__line' />
        </form>
      );
}

export default SearchForm;