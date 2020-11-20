import React, {useEffect, useState} from "react";
import "./Css/Home.css";
import Product from "./Product";
import {db} from "../firebase";

const Home = ()=>{
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        db.collection('products')
            .onSnapshot(snapshot => (
                setProducts(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
    },[]);

    return(
        <div className="home">
            <div className="home-container">
                <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/Wireless/Nov2020_BAU/OnePlus/post_16th_Bau/Non_hdfc/D18734439_BAU_OnePlus-8T_DesktopHero_1500x600._CB417134674_.jpg"
                    alt="background"
                    className="home-container-image"
                />
                <div className="home-row">
                    <Product
                        id={products[0]?.id}
                        key={products[0]?.id}
                        title={products[0]?.data.title}
                        price={products[0]?.data.price}
                        rating={products[0]?.data.rating}
                        image={products[0]?.data.image}
                    />
                    <Product
                        id={products[1]?.id}
                        key={products[1]?.id}
                        title={products[1]?.data.title}
                        price={products[1]?.data.price}
                        rating={products[1]?.data.rating}
                        image={products[1]?.data.image}
                    />

                </div>
                <div className="home-row">
                    <Product
                        id={products[2]?.id}
                        key={products[2]?.id}
                        title={products[2]?.data.title}
                        price={products[2]?.data.price}
                        rating={products[2]?.data.rating}
                        image={products[2]?.data.image}
                    /> <Product
                    id={products[3]?.id}
                    key={products[3]?.id}
                    title={products[3]?.data.title}
                    price={products[3]?.data.price}
                    rating={products[3]?.data.rating}
                    image={products[3]?.data.image}
                />
                </div>
                <div className="home-row">
                    <Product
                        id={products[4]?.id}
                        key={products[4]?.id}
                        title={products[4]?.data.title}
                        price={products[4]?.data.price}
                        rating={products[4]?.data.rating}
                        image={products[4]?.data.image}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;