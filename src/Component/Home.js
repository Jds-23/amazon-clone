import React from "react";
import "../Home.css";
import Product from "./Product";

const Home = ()=>{
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
                        id={12121}
                        key={12121}
                        title="The Alchemist"
                        price={299}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg"
                    />
                    <Product
                        id={12232}
                        key={12232}
                        title="Ikigai: The Japanese secret to a long and happy life"
                        price={359}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T8OXMiB5L._SX356_BO1,204,203,200_.jpg"
                    />
                </div>
                <div className="home-row">
                    <Product
                        id={12179}
                        key={12179}
                        title="The 4-Hour Work Week: Escape the 9-5, Live Anywhere and Join the New Rich"
                        price={209}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/51iGkLC6jhL.jpg"
                    /> <Product
                        id={12178}
                        key={12178}
                        title="Guitar"
                        price={209}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/31lBhW50VML.__AC_SY200_.jpg"
                    />
                </div>
                <div className="home-row">
                    <Product/>
                </div>
            </div>
        </div>
    )
}

export default Home;