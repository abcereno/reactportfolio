import React from 'react';
import "./ViewProduct.css"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Row, Col, Accordion, Carousel, Container } from 'react-bootstrap';
import { useEcommerceContext } from '../../Common/EcommerceContext/EcommerceContext.jsx';



const ViewProduct = () => {
  const { addToCart } = useEcommerceContext();
  const { id } = useParams();
  const [Product, setProduct] = useState({});
  const [button, setButton] = useState("");
  const handleAddToCart = (product) => {
    addToCart(product);
    setButton("disabled");
  };
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchProducts();
  }, [id]);
  console.log(Product);
  return (
    <Container>
      <Row className='row-content gap-5'>
        <Col xs={12} md={4} className='centered'>
          <Carousel>
            <Carousel.Item interval={3000}>
              <img loading='lazy' className="img-fluid" src={Product.image} alt={Product.title} text={Product.title} />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img loading='lazy' className="img-fluid" src={Product.image} alt={Product.title} text={Product.title} />
            </Carousel.Item>
            <Carousel.Item>
              <img loading='lazy' className="img-fluid" src={Product.image} alt={Product.title} text={Product.title} />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs={12} md={6} className='centered'>
        <div>
          <h1>{Product.title}</h1>
          {/* <h5>reviews: {Product.rating.count}</h5>
          <h5>rating: {Product.rating.rate}</h5> */}
          <h3>Now only ${Product.price}</h3>
          <Accordion className='mt-3' defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Delivery</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Description</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Variations</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <button
            onClick={() => handleAddToCart(Product)}
            className={`btn btn-success mt-5 ${button}`}
          > 
          Add To Cart
          </button>
        </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ViewProduct