import React, { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../context/StoreContext'
const Placeorder = () => {

  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
  <p className="title">Delivery Instructions</p>
  <div className="multi-fields">
    <input type="text" placeholder='First Name' />
    <input type="text" placeholder='Last Name' />
  </div>
  <input type="email" placeholder='Email Address' />
  <input type="text" placeholder='Street' />
  <div className="multi-fields">
    <input type="text" placeholder='City' />
    <input type="text" placeholder='State' />
  </div>
  <div className="multi-fields">
    <input type="text" placeholder='Pin Code' />
    <input type="text" placeholder='Country' />
  </div>
  <input type="number" placeholder='Phone' />
      </div>
      <div className="place-oreder-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>&#8377;{getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivey Fee</p>
            <p>&#8377;{getTotalCartAmount()===0?0:20}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Total</p>
            <p>&#8377;{getTotalCartAmount()===0?0:getTotalCartAmount()+20}</p>
          </div>
          <button >PROCEED TO CHECKOUT</button>
        </div>
      </div>

    </form>
  )
}

export default Placeorder
