import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;

import {fetchCountries} from './fetchCountries';



const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');


searchBox.addEventListener('input', fetchCountries);


function resultFilter (name) {
    fetch('https://restcountries.com/v2/all?fields=name.official,capital,population,flags.svg,[languages]')
        .then(name => {
            const newNames = ['name.official', 'capital', 'population', 'flags.svg', 'languages'];
            const markup = newNames.map((names) => `<li class="list-item">${names}</li>`).join("");
            countryList.insertAdjacentHTML("beforeend", markup);
            console.log(markup)
            
    return name.json()
}).then(countrisFilter => {
    console.log(countrisFilter)
})
};
resultFilter()
fetchCountries()
















// function fetchCountries() {
//     return fetch('https://restcountries.com/v3.1/all')
//         .then(response => {        
//     return response.json()
// }).then(countris => {
//     console.log(countris)
// })
//         .catch(error => {
//         console.log(error)
//     })
// };

// fetch('https://restcountries.com/v2/all?fields=name,capital,population,flags.svg,languages').then(response => {
    
//     return response.json;
// }).then(filtreCountry => {
//     console.log(filtreCountry)
// })
//     .catch(error => {
//     console.log(error)
// })

// countryList.insertAdjacentHTML('beforeend', `<li class ="link"> qwe</li>`)
// console.log(countryList)
// fetchCountries()


