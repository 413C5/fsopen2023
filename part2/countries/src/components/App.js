import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Filter";
import Countries from "./Countries";

const App = () => {
    const [filter, setFilter] = useState('')
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios
            .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
            .then(response => {
                //console.log(response.data)
                setCountries(response.data)
            })
    }, [])

    const handleFilterChange = (event) => {
        event.preventDefault()
        //console.log(event.target.value)
        setFilter(event.target.value)
    }

    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))

    //console.log('filtered countries', filteredCountries.length)

    return (
        <div>
            <Filter filter={filter} handleFilterChange={handleFilterChange} />
            <Countries countries={filteredCountries} />
        </div>
    )
}

export default App