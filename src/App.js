import {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './components/Header';

import './App.css';
import CurrentLocation from './components/CurrentLocation';

const App = () => {
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
      setLocations(prevLocations => [...prevLocations, newLocation])
      setError('')
    } catch (err) {
      setError('Unable to fetch weather data. Please try again.')
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
        <div className={locations.length > 0 ? "current-location-layout" : "current-location-layout gif-loader-layout"}>
          {
            locations.length > 0 ? <CurrentLocation location={locations[0]}/> : 
            <>
              <img src="https://res.cloudinary.com/n0ta10sear/image/upload/v1718437723/Plant_uxikxi.gif" style={{ width: "50%", WebkitUserDrag: "none" }} />
              <h3 style={{ alignContent: "center", color: darkMode ? "white" : "black", fontSize: "22px", fontWeight: "600",marginTop: "20px" }}>
                Detecting your location
              </h3>
              <h3 style={{  color: darkMode ? "white" : "black", marginTop: "20px", alignContent: "center" }}>
                Your current location will be used for calculating Real time weather.
              </h3>
            </>
          }
        </div>
        <div className='user-search-location-layout'>
          user search
        </div>
      </div>
    </div>
  )


}

export default App;
