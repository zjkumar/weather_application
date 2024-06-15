import {v4 as uuidv4} from 'uuid'
import './index.css'

const WeatherInfo = ({location, darkMode}) => {
    const {data} = location
    const name = data.name
    const temperature = data.main.temp
    const humidity = data.main.humidity
    const windSpeed = data.wind.speed
    const description = data.weather[0].description
    const imgSrc = darkMode ? "https://res.cloudinary.com/n0ta10sear/image/upload/v1718468281/humidity-svgrepo-com_3_k3j59c.svg" : "https://res.cloudinary.com/n0ta10sear/image/upload/v1718466498/humidity-svgrepo-com_2_mvhldh.svg"

    // const key = uuidv4()
    return (
        <li className={darkMode ? 'weather-info-card dark-box-shadow' : 'weather-info-card'}>
          <div>
            <p>{temperature} °C</p>
            <p>{name}</p>
          </div>
          <p>{description}</p>
          <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                <span style={{marginLeft: "8px", marginRight: "8px"}}><img className='icon' src={imgSrc} /> {humidity}</span>
                <span style={{marginLeft: "8px", marginRight: "8px"}}><i className="fa-solid fa-wind"></i> {windSpeed}</span>
            </div>
        </li>
      );
}

export default WeatherInfo