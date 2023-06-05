import React from "react";
import CountryDetails from "./CountryDetails";

const Countries = ({ countries }) => {

    //console.log('received ', countries.length)

    if (countries.length > 10) {
        //console.log('received >10', countries.length)
        return (
            <div>
                Too many matches,specify another filter
            </div>
        )
    }

    else if (countries.length <= 10 && countries.length > 1) {
        //console.log('between condition ', countries.length)
        return (
            <div>
                {countries.map(country => {
                    return (
                        <p key={country.name.common}> {country.name.common}</p>
                    )
                })}
            </div>
        )
    }

    else if (countries.length === 1) {
        //console.log('only one', countries.length)
        return (
            <div>
                <CountryDetails country={countries[0]} />
            </div>
        )
    }
}

export default Countries