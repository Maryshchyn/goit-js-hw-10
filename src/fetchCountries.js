 import { Notify } from 'notiflix';

const baseUrl = 'https://restcountries.com/v3.1';
const fieldsOptions = 'fields=name,capital,population,flags,languages';

export default function fetchCountries(countryName) {
  const url = `${baseUrl}/name/${countryName}?${fieldsOptions}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(
          Notify.failure('Oops, there is no country with that name')
        );
      }
      return response.json();
    })
    .catch(error => error);
}
 
