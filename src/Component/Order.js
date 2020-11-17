import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "../Order.css";
import CurrencyFormat from "react-currency-format";

const Order=({order})=>{
    return(
        <div className="order">
            <h3>Order</h3>
            <p>{order.id}</p>
            {order.data.basket?.map(item=>(
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                    key={item.key}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h4 className="order-total"> Order Total: {value}</h4>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$ "}
            />

        </div>
    )
}

export default Order;