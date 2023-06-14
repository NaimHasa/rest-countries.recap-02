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

/// Steps Number 03
const getCountryHTML = ({ name, flags, area }) => {

    return country = `
    <div class = "country">
        <h2>Name: ${name.common}</h2>
        <p>Area: ${area}</p>
          <img src= "${flags.png}">
           </div>

`;

}

/*

Original steps  01

const getCountryHTML = country => {
    return country = `
<div class = "country">
<h2>${country.name.common}</h2>
 <img src= "${country.flags.png}">
</div>

`;

}


*/
/*const getCountryHTML = country => {
    //   2 setps for destructing  
    const { name, flags } = country;

    return country = `
<div class = "country">
<h2>${name.common}</h2>
 <img src= "${flags.png}">
</div>

`;

}
*/

loadCountriesData();


