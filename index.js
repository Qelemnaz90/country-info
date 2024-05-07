
let inputField = document.getElementById('countryInput');
let apiUrl = `https://restcountries.com/v3.1/name/`;

const info = () => {
    let countryName = inputField.value;
    fetch(apiUrl + countryName)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            displayCountry(data)})
}

const displayCountry = countries => {
    if (countries.length > 0) {
        const country = countries[0]; 
        let flag = country.flags ?`<h5>Flag: <img src="${country.flags.png}" alt="Flag"></h5>` : ''; 
        let language = country.languages ? `<p>Language: ${Object.values(country.languages).join(', ')}</p>` : '';
        const countryInfo = `
            <h2>${country.name.common}</h2>`
            const fl =`${flag}`;
            const div2 =`
            ${language}
            <p>Capital: ${country.capital}</p>
            <p>Population: ${country.population}</p>
            <p>Region: ${country.region}</p>
            
        `;
        document.getElementById('countryInfo').innerHTML = countryInfo;
        document.querySelector('.div2').innerHTML = div2
        document.querySelector('.fl').innerHTML = fl
    } else {
        document.getElementById('countryInfo').innerText = "Country not found!";
    }
    
}


const handleKeyPress = event => {
    if (event.key === 'Enter') {
        info();
    }
};
inputField.addEventListener('keypress', handleKeyPress);