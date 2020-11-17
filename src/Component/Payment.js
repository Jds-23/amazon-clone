import React from "react";
import "../Payment.css";
import {useStateValue} from "../Context/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import {Link,useHistory} from "react-router-dom";
import {db} from "../firebase";
import firebase from "firebase";

const Payment=()=>{
    const [{basket,user},dispatch]=useStateValue();
    const history=useHistory();

    const payment=()=>{
        db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc()
            .set({
                basket: basket
            });
        dispatch({
            type:'EMPTY_BASKET'
        })
        history.replace("/orders");
    }

    return(
        <div className="payment">
            <div className="payment-container">
                <h1>
                    Checkout(<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                {/*delivery address*/}
                <div className="payment-section">
                    <div className="payment-title">
                        <h4>Delivery Address</h4>
                    </div>
                    <div className="payment-address">
                        <p>{user?.email}</p>
                        <p>2/A, Avenue 2nd Road</p>
                        <p>Kolkata</p>
                    </div>
                </div>
                {/*Review Items*/}
                <div className="payment-section">
                    <div className="payment-title">
                        <h4>Review items and delivery</h4>
                    </div>

                    <div className="payment-items">
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
                {/*Payment methods*/}
                <div className="payment-section">
                    <div className="payment-title">
                        <h4>Payment Method</h4>
                    </div>

                    <div className="payment-details">
                        <button className="payment-proceed" onClick={payment}>Proceed</button>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Payment;