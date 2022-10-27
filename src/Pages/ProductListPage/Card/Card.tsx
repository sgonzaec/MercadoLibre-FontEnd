import { Product } from "../../../Typings/Products/Product";
import FreeShipping from "../../../Assets/images/ic_shipping@2x.png";
import { Link } from "react-router-dom";

const Card = (product: Product) => {
  return (
    <div className="card">
      <Link to={`/items/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} />
      </Link>
      <div className="card__info">
        <div className="card__info__price">
          <p>$ {product.prices.prices[0].amount}</p>
          {product.shipping && <img src={FreeShipping} alt="free_shipping" />}
        </div>
        <Link to={`/items/${product.id}`}>
          <p className="card__info__title">{product.title}</p>
        </Link>
      </div>
      <div className="card__location">
        <p>{product.address.state_name}</p>
      </div>
    </div>
  );
};

export default Card;
