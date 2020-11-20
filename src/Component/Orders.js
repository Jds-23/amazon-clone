import React, {useEffect, useState} from "react";
import "./Css/Orders.css"
import {db} from "../firebase";
import {useStateValue} from "../Context/StateProvider";
import Order from "./Order";
import {useHistory} from "react-router-dom";

const Orders=()=>{
// eslint-disable-next-line
    const [{user},dispatch]=useStateValue();
    const [orders,setOrders]=useState([]);
    const history=useHistory();
    useEffect(()=>{
        if(user){
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('timestamp','desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
        }
        else {
            history.push("/");
        }
        // eslint-disable-next-line
    },[user]);

    return(
        <div className="orders">
            <h1>Orders</h1>
            <div className="orders-order">
                {
                    orders?.map(order=>(
                        <Order order={order} key={order.id}/>
                    ))
                }
            </div>
        </div>
    )
}
export default Orders;