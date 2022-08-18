import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;

// import {fetchCountries} from './fetchCountries';



const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');


searchBox.addEventListener('input', fetchCountries);

function paisesCreate({ name, capital, population, flags, languages }) {
     
    fetch('https://restcountries.com/v2/all?fields=name.official,capital,population,flags.svg,languages')
    const langCountry = Object.values(languages);
    const markup =
        `<li class="list-item">${name}</li>
         <li class="list-item">${capital}</li>
         <li class="list-item">${population}</li>
         <li class="list-item">${flags}</li>
         <li class="list-item">${languages}</li>`
    
   
    };

function fetchCountries(name) {
    return fetch('https://restcountries.com/v3.1/all')
        .then(name => {
            return name.json()
        })
      
};
fetchCountries().then(paisesCreate)





















