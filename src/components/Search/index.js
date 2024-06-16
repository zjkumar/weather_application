import './index.css'

const Search = ({location, setLocation, handleSearch}) => (
    <div className="search">
      <input
        className='search-bar'
        type="text"
        value={location}
        onChange={e => setLocation(e.target.value)}
        placeholder="Enter city name or zip code"
      />
      <button type="button" className='search-btn' onClick={handleSearch}>
        Search
      </button>
    </div>
  )
  
  export default Search
  