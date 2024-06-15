import {useState, useEffect} from 'react'
import axios from 'axios'

import {v4 as uuidv4} from 'uuid'
import Header from './components/Header';

import './App.css';
import CurrentLocation from './components/CurrentLocation';
import Search from './components/Search';
import WeatherInfo from './components/WeatherInfo';

const App = () => {
  const [location, setLocation] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  const [locations, setLocations] = useState([])
  const [error, setError] = useState('')

  const fetchWeatherByCoordinates = async (lat, lon, locationName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=09dc914c52f98f8e391baf8998ffd1d4&units=metric`,
      )
      const newLocation = {
        id: Date.now(),
        name: locationName,
        data: response.data,
      }
      setLocations(prevLocations => {console.log(prevLocations, 'prevlocations'); return [...prevLocations, newLocation]})
      setError('')
    } catch (err) {
      setError('Unable to fetch weather data. Please try again.')
    }
  }

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=09dc914c52f98f8e391baf8998ffd1d4&units=metric`,
      )
      const newLocation = {id: uuidv4(), name: location, data: response.data}
      setLocations(prevLocations => [...prevLocations, newLocation])
      setError('')
      setLocation('') // Clear input field after search
    } catch (err) {
      setError('Invalid location. Please try again.')
    }
  }


  useEffect(() => {
    const currentTheme = localStorage.getItem('theme')
    if (currentTheme) {
      setDarkMode(currentTheme === 'dark')
    }
  }, [])

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode'
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async position => {
          const {latitude, longitude} = position.coords
          await fetchWeatherByCoordinates(
            latitude,
            longitude,
            'Current Location',
          )
          
        },
        () => {
          setError('Geolocation permission denied. Enter location manually.')
        },
      )
    }
  }, [])

  return (
    <div className="app">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className='weather-layout'>
        <div className={darkMode ? "current-location-layout dark-box-shadow" : "current-location-layout"}>
          <Search location={location} setLocation={setLocation} handleSearch={handleSearch} />
          
          {locations.length > 0 ?  (
            <CurrentLocation darkMode={darkMode} location={locations[0]} />
          ) : <p>Unable to get current location</p>}
        </div>
        {
          locations.length > 1 && 
          <ul className='weather-info-layout'>
            {locations.slice(1, locations.length).map(eachLocation => (
              <WeatherInfo key={uuidv4()} location={eachLocation} darkMode={darkMode} />
            ))}
          </ul>
        }

      </div>
    </div>
  )


}

export default App;
