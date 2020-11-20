import React from "react";
import "./Css/Product.css";
import StarRateIcon from '@material-ui/icons/StarRate';
import {useStateValue} from "../Context/StateProvider";


const Product=({title,price,rating,image,id})=>{
    // eslint-disable-next-line
    const [{user,basket},dispatch]=useStateValue();

    const addToBasket=()=>{
        if(!user){
            alert("You must login");
        }
        else
        {
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating,
                },
            })
        }
    }
    return(
        <div className="product" key={id}>
            <div className="product-info">
                <h3>{title}</h3>
                <p className="product-price">
                    <small>&#8377;</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating).fill().map((_,i)=>( <StarRateIcon key={i}/>))}
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