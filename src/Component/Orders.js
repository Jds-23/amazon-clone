import React, {useEffect, useState} from "react";
import "../Orders.css"
import {db} from "../firebase";
import {useStateValue} from "../Context/StateProvider";
import Order from "./Order";

const Orders=()=>{
    const [{basket,user},dispatch]=useStateValue();
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
        if(user){
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
        }
        else {
            setOrders([])
        }
    },[]);

    return(
        <div className="orders">
            <h1>Orders</h1>
            <div className="orders-order">
                {
                    orders?.map(order=>(
                        <Order order={order}/>
                    ))
                }
            </div>
        </div>
    )
}
export default Orders;