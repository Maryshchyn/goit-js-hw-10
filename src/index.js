import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;

import fetchCountries from './fetchCountries';
import { createMarkUpForCountry, createMarkupForList } from './paises';

const inputRef = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

inputRef.addEventListener('input', debounce(onTapQuery, DEBOUNCE_DELAY));

function onTapQuery(e) {
  e.preventDefault();

  clearMarkUp();

  const searchQuery = e.target.value.trim();

  if (searchQuery) {
    fetchCountries(searchQuery).then(renderCountry);
  }
}

function renderCountry(countries) {
  if (countries.length > 10) {
    return Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }

  if (countries.length > 1 && countries.length < 10) {
    return countryList.insertAdjacentHTML(
      'beforeend',
      countries.map(createMarkupForList).join('')
    );
  }

  if (countries.length === 1) {
    return countryInfo.insertAdjacentHTML(
      'beforeend',
      countries.map(createMarkUpForCountry).join('')
    );
  }
}

function clearMarkUp() {
  countryInfo.innerHTML = '';
  countryList.innerHTML = '';
}