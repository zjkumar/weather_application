const CurrentLocation = props => {
    const {location} = props
    const {data} = location
    const temperature = data.main.temp
    const humidity = data.main.humidity
    const windSpeed = data.wind.speed
    const description = data.weather[0].description
    // console.log(location)
    // console.log(data)
    console.log(data.main.temp, data.main.humidity, data.wind.speed, data.weather[0].description)


    return (
        <>
            <p>temperature {temperature}</p>
            <p>humidity {humidity}</p>
            <p>windSpeed {windSpeed}</p>
            <p>description {description}</p>
        </>
    )
}

export default CurrentLocation