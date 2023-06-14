const loadCountriesData = () => {
    const url = 'https://restcountries.com/v3.1/all';
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data));
}
const displayData = countries => {
    console.log(countries)
    const allCountriesHTML = countries.map(country => getCountryHTML(country))
    const allCountries = document.getElementById('containerId')
    allCountries.innerHTML = allCountriesHTML.join('');

}
const getCountryHTML = country => {

    return country = `
<div class = "country">
<h2>${country.name.common}</h2>
 <img src= "${country.flags.png}">
</div>

`;

}

loadCountriesData();


