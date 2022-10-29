import "./SearchBar.scss";
import iconSearch from "../../Assets/images/ic_Search@2x.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchData, setSearchData] = useState("");

  const navigate = useNavigate();

  const validKey = (e: any) => {
    if(e.keyCode === 13){
      navigate(`/${searchData}`);
    }
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        name={"search"}
        className="search-bar-input"
        placeholder="Nunca dejes de buscar"
        onKeyUp={(e) => {
          const target = e.target as HTMLTextAreaElement;
          setSearchData(target.value)
          validKey(e);
        }}
      />
      <Link to={`/${searchData}`}>
        <button className="search-bar-button" type="submit">
          <img src={iconSearch} alt="iconSearch" />
        </button>
      </Link>
    </div>
  );
};

export default SearchBar;
