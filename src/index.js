import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;

import {fetchCountries} from './fetchCountries';



const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');


searchBox.addEventListener('input', onInput);

function onInput(e) {
    const input = e.currentTarget;
    const searchQuery = input.value.trim();
    console.log(searchQuery)
};
 fetchCountries(searchQuery)
    .then(renderCountry)
    .catch(onFeachError)
    .finally(()=> input.reset());

function paisesCreate({ name: { official }, capital, population, flags: { svg }, languages }) {
    const valueLang = Object.values(languages);
    const paises =
        `<li class="list-item">
        <img class="img-flag" src="${svg}" /><span class="country-info__name">${official}</span>
        </li>
         <li class="list-item">
         <p class =""list-text"><span class="list-discription>Capital:</span>${capital}</p>
         </li>
         <li class="list-item">
         <p class =""list-text"><span class="list-discription>Population:</span>${population}</p>
         </li>
        
         <li class="list-item">
         <p class =""list-text"><span class="list-discription>Languages:</span>${languages}</p>
         </li>`;
    return paises;
    };





// function fetchCountries(name) {
//     const url = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;

//     return fetch(url).then(response => {
//         return response.json()
//     });
// };


function renderCountry(country) {
    const markup = paisesCreate(country);
            countryList.innerHTML = markup;
}
      

function onFeachError(data){
  if (data.length > 10) {
      Notify.info('Too many matches found. Please enter a more specific name.');
      
  } else if (data.length === 0) {
    Notify.failure("Oops, there is no country with that name");
  } else if (data.length >= 2 && data.length <= 10) {
       Notify.info('render list');
  } else if (data.length === 1) {
       Notify.info('render 1 country');
  }
}





















