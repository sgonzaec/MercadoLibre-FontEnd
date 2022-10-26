import { Product } from "../../../Typings/Products/Product";
import FreeShipping from "../../../Assets/images/ic_shipping@2x.png"

const Card = (product: Product) => {
  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} />
      <div className="card__info">
        <div className="card__info__price">
            <p>$ {product.prices.prices[0].amount}</p>
            {product.shipping &&<img src={FreeShipping} alt="free_shipping" />}
        </div>
        <p className="card__info__title">{product.title}</p>
      </div>
      <div className="card__location">
        <p>{product.address.state_name}</p>
      </div>
    </div>
  );
};

export default Card;
