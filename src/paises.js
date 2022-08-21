export function paisesCreate({ name: { official }, capital, population, flags: { svg }, languages }) {
    const valueLang = Object.values(languages);
    return `<li class="list-item">
        <img class="img-flag" src="${svg}" /><span class="country-info__name">${official}</span>
        </li>
         <li class="list-item">
         <p class =""list-text"><span class="list-discription>Capital:</span>${capital}</p>
         </li>
         <li class="list-item">
         <p class =""list-text"><span class="list-discription>Population:</span>${population}</p>
         </li>
        
         <li class="list-item">
         <p class =""list-text"><span class="list-discription>Languages:</span>${valueLang}</p>
         </li>`;
    
    };