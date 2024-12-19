import React from 'react';
import "./Cart.css";
import { useEcommerceContext } from '../../Common/EcommerceContext/EcommerceContext';
import { Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Cart = () => {
  const { cart, updateCartItemQuantity, removeFromCart } = useEcommerceContext();
  let totalPrice = 0;
  cart.forEach(item => {
    totalPrice += item.price * item.quantity;
  });
console.log(cart);

  // Function to handle quantity increase
  const handleIncreaseQuantity = (productId) => {
    updateCartItemQuantity(productId, 1);
  };

  const handleDecreaseQuantity = (productId) => {
    const item = cart.find((product) => product.id === productId);
    // Check if the item is found and the quantity is greater than 1
    if (item && item.quantity > 1) {
      updateCartItemQuantity(productId, -1);
    } else {
      // If the quantity is 1, you can choose to remove the item or take other action
      handleRemoveItem(productId);
    }
  };
  // Function to handle item removal
  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  if (cart === null || cart.length === 0) {
    return (
      <Row className='row-content g-0 centered'>
        <div>
        <h1 className='centered'>Your Cart is Empty!</h1>
        <Link className='centered' to={"/product-catalog"}>Shop here</Link>
        </div>
      </Row>
    );
  }

  return (
    <Container>
    <Row className='row-content columned'>
        <Table striped bordered hover className='p-5 my-5'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
      {cart.map((product) => (
            <tr key={product.id}>
              <td className='align-content-center'>
                <img src={product.image} alt={product.title} className="img-fluid rounded-start" />
              </td>
              <td className='align-content-center'>
                {product.title}
              </td>
              <td className='align-content-center'>
                <div className="d-flex justify-content-center gap-2">
                  <button className="btn btn-outline-secondary" onClick={() => handleDecreaseQuantity(product.id)}>-</button>
                  <span className="mx-2 d-flex align-items-center">{product.quantity}</span>
                  <button className="btn btn-outline-secondary" onClick={() => handleIncreaseQuantity(product.id)}>+</button>
                  <button className="btn btn-danger" onClick={() => handleRemoveItem(product.id)}>Remove</button>
                </div>
              </td>
              <td className='align-content-center'>
                ${product.price * product.quantity}
              </td>
            </tr>
        ))}
          </tbody>
        </Table>
      <h1>
        Total Price: ${totalPrice}
      </h1>
      <form method='POST' action='https://creditrepair-api.online/api/checkout'>
        <input type='hidden' name='carts' value={JSON.stringify(cart)} />
        <button type="submit" className='btn btn-primary'>Checkout</button>
      </form>
    </Row>

    </Container>
  );
};

export default Cart;
