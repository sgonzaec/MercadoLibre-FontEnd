import { useContext } from "react";
import { Link } from "react-router-dom";
import { BreadcrumDataContext } from "../../Context/BreadcrumData.context";
import './Breadcrums.scss'

const Breadcrums = () => {
  const { path } = useContext(BreadcrumDataContext);

  return (
    <div className="breadcrums">
      <Link to="/" className="breadcrums-link">Inicio</Link>
      {path.map((item: string, index: number) => {
        return (
          <span key={index}>
            <span className="breadcrums-separator">{'>'}</span>
            <Link to={`/${item}`} className="breadcrums-link">{item}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrums;
