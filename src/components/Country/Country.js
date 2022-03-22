import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props);

    //destructuring
    const {name, continents, population, flags} = props.country;
    return (
        <div className='design'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h3>Continent: {continents}</h3>
            <h3>Population: {population}</h3>
        </div>
    );
};

export default Country;