import React, { useEffect, useState } from 'react';
import Country from '../../components/Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);


    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);

    return (
        <div>
            <h1>Hello From Countries: {countries.length}</h1>
            {
                countries.map(country => <Country 
                    country = {country}                     
                    /* name = {country.name.common} 
                    population = {country.population} 
                    continents = {country.continents} */
                    >
                    </Country>
                    )
            }
           
        </div>
    );
};

export default Countries;