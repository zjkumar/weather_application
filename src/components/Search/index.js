const Search = ({location, setLocation, handleSearch}) => (
    <div className="search">
      <input
        type="text"
        value={location}
        onChange={e => setLocation(e.target.value)}
        placeholder="Enter city name or zip code"
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  )
  
  export default Search
  