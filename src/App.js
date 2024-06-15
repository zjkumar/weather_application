import {useState, useEffect} from 'react'

import Header from './components/Header';

import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

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

  return (
    <div className="app">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )


}

export default App;
