
import './index.css'
const CurrentLocation = ({location, darkMode}) => {
    const {data} = location
    const name = data.name
    const temperature = data.main.temp
    const humidity = data.main.humidity
    const windSpeed = data.wind.speed
    const description = data.weather[0].description
    const imgSrc = darkMode ? "https://res.cloudinary.com/n0ta10sear/image/upload/v1718468281/humidity-svgrepo-com_3_k3j59c.svg" : "https://res.cloudinary.com/n0ta10sear/image/upload/v1718466498/humidity-svgrepo-com_2_mvhldh.svg"
    console.log(darkMode, 'dark mode')
    console.log(data)
    // console.log(data.main.temp, data.main.humidity, data.wind.speed, data.weather[0].description)


    return (
        <div className='current-location-weather'>
            <div>
                <p className='location-main'>{temperature} C</p>
                <p className='location-main'>{name}</p>
            </div>
            
            <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                <span><img className='icon' src={imgSrc} /> {humidity}</span>
                <span><i className="fa-solid fa-wind"></i> {windSpeed}</span>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default CurrentLocation