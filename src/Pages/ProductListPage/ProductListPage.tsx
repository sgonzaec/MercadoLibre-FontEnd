import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MercadoLibreClient from "../../Client/MercadoLibre.client";
import Header from "../../Components/Shared/Header/Header";
import { Product } from "../../Typings/Products/Product";
import { Products } from "../../Typings/Products/Products";
import Card from "./Card/Card";
import "./ProductListPage.scss";

const ProductListPage = () => {
  const [products, setProducts] = useState<Products>({ results: [] });

  let { searchName } = useParams();

  useEffect(() => {
    if (searchName) {
      MercadoLibreClient.getProductList(searchName).then((result) => {
        setProducts(result);
      });
    }
  }, [searchName]);

  return (
    <>
      <Header />
      <div className="product-list-page">
        {products?.results?.map((product: Product) => {
          return (
            <Card {...product}/>
          )
        })}
      </div>
    </>
  );
};

export default ProductListPage;
