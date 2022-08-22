export { createMarkUpForCountry, createMarkupForList };

function createMarkUpForCountry({
  name: { official },
  capital,
  population,
  flags: { svg },
  languages,
}) {
  const valueLang = Object.values(languages);
  return ` <div class="img-wrap">
  <img src="${svg}" alt="flag" width="120" height="120" class="img-flag"></img>
<span class="country-info__name">${official}</span>
</div>
<div class="country-description">
  <p class="country-text">
    Capital: <span class="country-discription"></span>${capital}
  </p>
  <p class="country-text">
    Population: <span class="country-discription"></span>${population}
  </p>
  <p class="country-text">
    Languages: <span class="country-discription"></span>${valueLang}
  </p>
</div>`;
}

function createMarkupForList({ name: { official }, flags: { svg } }) {
  return ` <li class="country-list__item">
  <img src="${svg}" alt="flag" width="40" height="40" class="country-flag" />
  <span class="country-name">${official}</span>
</li>`;
}