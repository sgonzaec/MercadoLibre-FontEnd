import "./SearchPage.scss";
import logo from "../../Assets/images/Logo_ML@2x.png";
import SearchBar from "../../Components/SearchBar/SearchBar";

const SearchPage = () => {
  return (
    <div className="search-page">
      <img src={logo} alt="logo" id="logo"/>
      <SearchBar />
    </div>
  );
};

export default SearchPage;
