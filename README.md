# Weather Application

## Overview

This project is a weather application developed as part of the hiring process for a Frontend Developer intern position. The application provides users with current weather information based on their location or any location they search for. The app also includes features like dark mode, the ability to search for multiple locations, and a responsive design.

## Features

- **Geolocation-based Weather**: When the user opens the website, it requests their location to display the current weather.
- **Search Functionality**: Users can search for weather information by city name or zip code.
- **Multiple Locations**: Users can fetch weather data for multiple locations, and the results will be displayed in a scrollable card format.
- **Dark Mode**: A toggle button to switch between dark mode and light mode.
- **Responsive Design**: The app works well on various devices, including desktops, tablets, and mobile phones.

## Tech Stack

- **Frontend**: React.js
- **API**: OpenWeather API
- **Styling**: CSS
- **Unique IDs**: UUID
- **HTTP Requests**: Axios
- **Icons**: FontAwesome

## Setup and Installation

To set up and run the project locally, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/zjkumar/weather-app.git
    cd weather-app
    ```

2. **Install Dependencies**:
    Make sure you have [Node.js](https://nodejs.org/) installed. Then run:
    ```bash
    npm install
    ```

3. **Run the Development Server**:
    Start the development server using:
    ```bash
    npm start
    ```
    The app will be available at `http://localhost:3000`.

4. **Build the Project**:
    To build the project for production, use:
    ```bash
    npm run build
    ```
    This will create a `build` directory with the production build of your app.

## Project Structure

- **src/App.js**: Main application component that handles state and API calls.
- **src/components/Header/index.js**: Header component that includes the dark mode toggle.
- **src/components/CurrentLocation/index.js**: Component to display weather for the user's current location.
- **src/components/Search/index.js**: Search bar component for fetching weather data by city name or zip code.
- **src/components/WeatherInfo/index.js**: Component to display weather information in a card format.

## Libraries and Tools

- **React.js**: A JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for the browser and Node.js used for making API calls.
- **UUID**: Library for generating unique IDs, used for React keys.
- **FontAwesome**: Icon library used for adding icons to the application.

## Usage

1. **Opening the App**:
    When the application is opened, it requests the user's geolocation. Upon receiving permission, the app fetches and displays the weather information for the current location in a card.

2. **Searching for Locations**:
    Users can search for weather information by entering a city name or zip code into the search bar. The weather information for the searched location is displayed in a new card, and users can scroll through the cards to view weather data for multiple locations.

## Deployment
    The application is deployed on Vercel and can be accessed at weather-application-inky-sigma.vercel.app.

## Future Enhancements

- **Enhanced Error Handling**: Improve feedback for various error scenarios.
- **Additional Weather Information**: Display more detailed weather data like forecasts, sunrise/sunset times, etc.
- **Improved UI/UX**: Further enhance the user interface and experience based on user feedback.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

**Note**: Replace `YOUR_API_KEY` with your actual OpenWeather API key in the API call URLs within the code.
