import { Link } from "react-router-dom";
import logo from "../../../Assets/images/Logo_ML@2x.png";
import SearchBar from "../../SearchBar/SearchBar";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="logo" id="logo" />
      </Link>
      <SearchBar />
    </div>
  );
};

export default Header;
