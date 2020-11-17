import React from "react";
import "../Checkout.css";
import Subtotal from "./Subtotal";
import {useStateValue} from "../Context/StateProvider";
import CheckoutProduct from "./CheckoutProduct";

const Checkout=()=>{
    const [{basket,user},dispatch]=useStateValue();

    return(
        <div className="checkout">
            <div className="checkout-left">
                <img
                    className="checkout-ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                <div>
                    <h5>Hello, {user?.email}</h5>
                <h4 className="checkout-left-title">
                    Your shopping Basket
                </h4>
                    {basket?.map(item=>(
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                            key={item.key}
                        />
                    ))}

                </div>
            </div>

            <div className="checkout-right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout;