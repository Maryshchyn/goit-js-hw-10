import './css/styles.css';
import Notiflix from 'notiflix';
// var  debounce  = require ( ' lodash.debounce ' ) ; 
const DEBOUNCE_DELAY = 300;

import {fetchCountries} from './fetchCountries';


const refs = {
    searchBox: document.querySelector('#search-box'),
    countryList: document.querySelector('country-list'),
    countryInfo: document.querySelector('country-info'),
};

refs.searchBox.addEventListener('input',fetchCountries);

fetchCountries()


