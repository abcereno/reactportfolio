import React, { useState, useEffect } from "react";
import { Row, Container, } from "react-bootstrap";
import "./Products.css";
import MyLoader from "../../Common/MyLoader/MyLoader";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function fetchProducts() {
      try {
        // const res = await fetch(`http://localhost:8000/api/all-products`);
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchProducts();
  }, []);

  while (!products) {
    return <Row className="row-content"><MyLoader /></Row>;
  }

  return (
    <>
      <Container>
        <Row className="g-0 pt-5">
          <h2 className="job mt-5 text-light">Featured Products</h2>
          <ul className="grid gallery list-unstyled mt-5 mb-5">
            {products
              .map((product) => (
                <li key={product.id} className="product-li">
                  <figure className="box">
                      <img loading="lazy" className="product-img" src={product.image} alt="Great Barrier Reef, Australia" />
                  </figure>
                  {/* <p className="small">{product.category}</p> */}
                  <div className="d-flex gap-3 flex-column mt-3">
                  <p className="price text-light">Now only ${product.price}</p>
                  <p className="product-title small text-light">{product.title}</p>
                  <Link className="butones" to={`/view-product/${product.id}`}>More Details</Link>
                  </div>
                </li>
              ))};
          </ul>
        </Row>
      </Container>
    </>
  );
};

export default Products;
