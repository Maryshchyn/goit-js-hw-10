export function fetchCountries(name) {
    fetch('https://restcountries.com/v3.1/all')
        .then(name => {
    
    return name.json()
}).then(countris => {
    console.log(countris)
})
};

