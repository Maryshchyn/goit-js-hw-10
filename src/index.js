import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;

import fetchCountries from './fetchCountries';
import { paisesCreate } from './paises';



const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');


searchBox.addEventListener('input', onInput);
let searchQuery = '';
function onInput(e) {
    const input = e.currentTarget;
    const searchQuery = input.value.trim();
    console.log(searchQuery)
};
     fetchCountries(searchQuery)
    // .then(renderCountry)
       .then(renderCountry => {
         console.log(renderCountry)
       })
       
    .catch(onFeachError)
    // .finally(()=> input.reset());

function renderCountry(country) {
    const markup = paisesCreate(country);
            countryList.innerHTML = markup;
}
      

function onFeachError(data){
  if (data.length > 10) {
      Notify.info('Too many matches found. Please enter a more specific name.');
      
  } else if (data.length === 0) {
    
    Notify.failure('Oops, there is no country with that name');
  } else if (data.length >= 2 && data.length <= 10) {
    
    Notify.info('render list');
  } else if (data.length === 1) {
    Notify.info('render 1 country');
       
  }
}





















