import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MercadoLibreClient from "../../Client/MercadoLibre.client";
import { ProductDescription } from "../../Typings/Details/Description";
import { DetailProducts } from "../../Typings/Details/Details";
import Format from "../../Utils/Format";
import Loading from "../../Utils/Loading/Loading";
import "./ProductDetailPage.scss";

const ProductDetailPage = () => {
  const [detailsProduct, setDetailsProduct] = useState<DetailProducts>();
  const [Description, setDescription] = useState<ProductDescription>();
  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  useEffect(() => {
    if (id) {
      MercadoLibreClient.getProductDetail(id, setDetailsProduct)
      
      MercadoLibreClient.getProductDescription(id, setDescription)
      setLoading(false);
    }
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="product-detail-page">
          <div className="product-detail-page-detail">
            <div className="product-detail-page-detail-image">
              <img
                src={detailsProduct?.thumbnail}
                alt={detailsProduct?.title}
              />
            </div>
            <div className="product-detail-page-detail-info">
              <p className="product-detail-page-detail-info-condition">
                {detailsProduct?.condition === "new" ? "Nuevo" : "Usado"} -{" "}
                {detailsProduct?.sold_quantity} vendidos
              </p>
              <p className="product-detail-page-detail-info-title">
                {detailsProduct?.title}
              </p>
              <p className="product-detail-page-detail-info-price">
                {detailsProduct &&
                  Format.Price(
                    detailsProduct?.price,
                    detailsProduct?.currency_id
                  )}
              </p>
              <button className="product-detail-page-detail-info-button">
                Comprar
              </button>
            </div>
          </div>
          <div className="product-detail-page-description">
            <p className="product-detail-page-description-title">
              Descripción del producto
            </p>
            <p className="product-detail-page-description-text">
              {Description?.plain_text}
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetailPage;
