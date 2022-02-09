import React from 'react';
import searchButton from '../../images/search-button.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import './SearchForm.css';

function SearchForm({ onSearch }) {
  const [query, setQuery] = React.useState('');
  const [checkboxStatus, setCheckboxStatus] = React.useState(false);

  function handleQueryChange(evt) {
    const input = document.getElementById('queryInput');
    input.setCustomValidity('');
    setQuery(evt.target.value);
  }

  function handleCheckboxChange(checkboxStatus) {
    setCheckboxStatus(checkboxStatus);
    onSearch(query, checkboxStatus);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSearch(query, checkboxStatus);
  }

  React.useEffect(() => {
    if (!query) {
      const input = document.getElementById('queryInput');
      input.setCustomValidity('Нужно ввести ключевое слово');
    }
  }, [query]);

  return (
    <section className="search-form">
      <form
        onSubmit={handleSubmit}
        className="search-form__form"
      >
        <div className="search-form__input-wrap">
          <input
            id="queryInput"
            value={query || ''}
            onChange={handleQueryChange}
            className="search-form__input"
            type="text"
            name="query"
            placeholder="Фильм"
            required
          />
          <button className='search-form__button'>
              <img src={searchButton} alt='кнопка поиска' />
          </button>
        </div>
        <div className="search-form__filter">
          <FilterCheckbox label='Короткометражки'
            checkboxStatus={checkboxStatus}
            onCheckboxChange={handleCheckboxChange}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
