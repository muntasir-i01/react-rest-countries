import Countries from "./Other-Components/Countries/Countries";

/* import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Person from './components/Person/Person';
import Header from './components/Header/Header';
 */
function App() {
  return (
    <div className="App">
      <Countries></Countries>




      
      {/* <Header></Header>
      <Countries></Countries>
      <Person></Person> */}
    </div>
  );
}


















/* function LoadCountries() {
  const [countries, setCountries] = useState([]);

  useEffect( () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h1>Visiting Every Country of The World</h1>
      <h3>Available Countries: {countries.length}</h3>
      {
        countries.map(country => <Country name={country.name} population={country.population}></Country>)
      }
    </div>
  )
} */

/* function Country(props) {
  return (
    <div className='design'>
      <h2>Name: {props.name.common}</h2>
      <h2>Official Name: {props.name.official}</h2> 
      <h4>Population: {props.population}</h4>     
    </div>
  )
} */

export default App;
