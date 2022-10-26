import "./SearchBar.scss";
import iconSearch from "../../Assets/images/ic_Search@2x.png";

const SearchBar = () => {

  return (
    <div className="search-bar">
        <input
          type="text"
          name={"search"}
          className="search-bar-input"
          placeholder="Nunca dejes de buscar"
        />
        <button className="search-bar-button" type="submit">
          <img src={iconSearch} alt="iconSearch" />
        </button>
    </div>
  );
};

export default SearchBar;
