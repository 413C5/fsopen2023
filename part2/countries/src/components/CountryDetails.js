import React from "react";
import Weather from "./Weather";

const CountryDetails = ({ country }) => {

    //console.log(country.languages)
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <b>languages:</b>
            <ul>
                {Object.values(country.languages).map(language => {
                    return (
                        <li key={language}>{language}</li>
                    )
                })}
            </ul>
            <img
                src={country.flags.png}
                alt={`${country.name.common} flag`}
                width="175"
                height="175"
            />
            <Weather capital={country.capital}/>
        </div>
    )
}

export default CountryDetails