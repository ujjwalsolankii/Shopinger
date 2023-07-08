import React, { useContext } from 'react';
import {ShopContext} from '../../context/shop-context'

export const Product = (props) => {
    const {id,productName , price ,productImage} = props.data;
    const { addToCart ,cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id]
  return (
    <div className='product'>
        <img src={productImage} alt="" />
        <div className="description">
            <p className="productName">
                <b>{productName}</b>
            </p>
            <p>${price}</p>
        </div>
        <button className='addTocartBttn' onClick={() => addToCart(id)}> 
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
    </div>
  )
};
 