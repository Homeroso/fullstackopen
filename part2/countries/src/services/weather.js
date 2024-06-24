import axios from 'axios'

const baseUrl = 'http://api.weatherapi.com/v1/current.json'

const getAll = city => {
    const request = axios.get(`${baseUrl}?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}`)
    console.log(request)
    return request.then(response => response.data)
}

export default { getAll }