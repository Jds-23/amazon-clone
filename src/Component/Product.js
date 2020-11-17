import React from "react";
import 'rsuite/dist/styles/rsuite-default.css';
import "../Product.css";
import {Icon} from "rsuite";
import {useStateValue} from "../Context/StateProvider";


const Product=({title,price,rating,image,id})=>{
    const [{basket},dispatch]=useStateValue();


    const addToBasket=()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }
    return(
        <div className="product" >
            <div className="product-info">
                <h6>{title}</h6>
                <p className="product-price">
                    <small>&#8377;</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating).fill().map((_,i)=>( <Icon icon="star"/>))}
                </div>
            </div>


            <img
                src={image}
                alt=""
            />

            <button  onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product;