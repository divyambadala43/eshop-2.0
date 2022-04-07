import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { DATA } from "../data/data";

const ProductDetail = () => {
  const [cartButton, setCartButton] = useState("Add to Cart");

  const productId = useParams();
  const productDeatil = DATA.filter((x) => x.id == productId.id);
  const product = productDeatil[0];
  console.log(product);

  const handleCart = (product) => {
    if (cartButton === "Add to Cart") {
      setCartButton("Remove from Cart");
    } else {
      setCartButton("Add to Cart");
    }
  };

  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.img} alt={product.title} height="400px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4">${product.price}</h2>
            <p className="lead">{product.desc}</p>
            <button
              onClick={() => handleCart(product)}
              className="btn btn-outline-primary my-5"
            >
              {cartButton}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
