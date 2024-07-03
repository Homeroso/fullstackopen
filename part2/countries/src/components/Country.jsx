import { useState,useEffect } from 'react'
import weatherService from '../services/weather'

const Country = ({ country, data}) => {

    if (data === null) return (
        <div>
            <p>{country}</p>
        </div>
    )

    const [weather, setWeather] = useState(null)

    const languages = []
    for(const language in data.languages)
        languages.push(data.languages[language])

    useEffect(() => {
        weatherService
            .getAll(data.capital)
            .then(data => {
                setWeather(data)
                //console.log(data)
            })
    }, [])

    return(
        <div>
            <h2>{country}</h2>
            <div>
                <h3>Capital: {data.capital}</h3> 
                <h3>Area: {data.area} km<sup>2</sup></h3>
                <h3>Languages</h3>
                <ul>
                    {languages.map(language =>
                        <li key = {language}>{language}</li>
                    )}
                </ul>
                <h3>Flag</h3>
                <img src={data.flags.png} alt={data.flags.alt} width='200'/>
                <h3>Weather in {data.capital}</h3>
                <p>Temperature: {weather.current.temp_c}° Celcius</p>
            </div>
                
        </div>
    )
}

export default Country