const Header = ({darkMode, setDarkMode}) => 
    (
      <header>
        <img src='https://res.cloudinary.com/n0ta10sear/image/upload/v1718435831/weather-forecast_zeiype.png' className="weather-logo" />
        <button className="theme-button" type="button" onClick={() => setDarkMode(!darkMode)}>
           {darkMode ? <span style={{color: "#ffffff"}}><i className="fa-regular fa-sun fa-3x"></i></span>: <i className="fa-solid fa-moon fa-3x"></i>} 
        </button>
      </header>
    )
  
  
  export default Header
  