import React from "react";
import "./Css/CheckoutProduct.css";
import {useStateValue} from "../Context/StateProvider";
import StarRateIcon from '@material-ui/icons/StarRate';

const CheckoutProduct=({title,price,rating,image,id,hideButton})=>{
    // eslint-disable-next-line
    const [{basket},dispatch]=useStateValue();
    const removeFromBasket=()=>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return(
        <div className="checkoutProduct" key={id}>
            <img
                src={image}
                alt=""
                className="checkoutProduct-image"
            />
            <div className="checkoutProduct-info">
                <p className="checkoutProduct-title">{title}</p>
                <p className="checkoutProduct-price">
                    <small>₹</small>
                    <strong>{price}</strong></p>

                <div className="checkoutProduct-rating">
                    {Array(rating).fill().map((_, i) => (<StarRateIcon key={i}/>))}
                </div>
                {!hideButton&&(<button onClick={removeFromBasket}>Remove from basket</button>)}
            </div>
        </div>
    )
}
export default CheckoutProduct;