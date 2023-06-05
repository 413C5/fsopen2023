import axios from "axios";
import React, { useState, useEffect } from "react";

const Weather = ({ capital }) => {
    const [weather, setWeather] = useState({})

    const api_key = process.env.REACT_APP_API_KEY

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`)
            .then(response => {
                //console.log(response.data)
                setWeather(response.data)
            })
    }, [])

    //console.log('weather ',weather?.weather?.[0].icon)

    //? is used to wait for data to load, otherwise it crashes

    return (
        <div>
            <h2>Weather in {capital}</h2>
            <p>temperature {weather?.main?.temp} Celsius</p>
            {/* In case the icon is not loaded correctly */}
            {weather?.weather?.[0]?.icon && (
                <img
                    src={`https://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`}
                    alt="weather icon"
                    width="84"
                    height="84"
                />
            )}
            <p>wind {weather?.wind?.speed} m/s</p>
        </div>
    )
}

export default Weather

