import React from "react";
import {Icon} from "rsuite";
import "../CheckoutProduct.css";
import {useStateValue} from "../Context/StateProvider";

const CheckoutProduct=({title,price,rating,image,id})=>{
    const [{basket},dispatch]=useStateValue();
    const removeFromBasket=()=>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return(
        <div className="checkoutProduct">
            <img
                src={image}
                alt=""
                className="checkoutProduct-image"
            />
            <div className="checkoutProduct-info">
                <p className="checkoutProduct-title">{title}</p>
                <p className="checkoutProduct-price">
                    <small>$</small>
                    <strong>{price}</strong></p>

                <div className="checkoutProduct-rating">
                    {Array(rating).fill().map((_,i)=>( <Icon icon="star" />))}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}
export default CheckoutProduct;