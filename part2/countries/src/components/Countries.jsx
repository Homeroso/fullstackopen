import { useState, useEffect } from 'react'
import countryService from '../services/countries'
import Country from './Country'

const Countries = ({ filter, showAll, setFilter }) => {

    const [countries, setCountries] = useState([])
    const [data, setData] = useState(null)
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        countryService
            .getAll()
            .then(initialCountries => {
                setCountries(countries.concat(initialCountries.map(country => country.name.common)))
            })
    }, [])

    const countriesToShow = showAll
        ? countries
        : countries.filter(country => country.search(filter) > -1)
    
    useEffect(() => {
        countryService
            .getCountry(filter)
            .then(data => {
                setData(data)
            })
    }, [update])

    const handleShow = name => {
        setFilter(name)
        setUpdate(!update)
    }

    if(countries.length === 0) return <div>Loading...</div>

    if(countriesToShow.length > 10) return <div>Too many matches, specify another filter</div>

    if(countriesToShow.length === 1) {
        return <Country country = {countriesToShow[0]} data = {data} />
    }


    return (
        <div>
            {countriesToShow.map(country => 
                <div>
                    <Country 
                        key={countries.indexOf(country)}
                        country = {country}
                        data = {null}
                    />
                    <button onClick={() => handleShow(country)}>Show</button>
                </div>
            )}
        </div>
    )
}

export default Countries