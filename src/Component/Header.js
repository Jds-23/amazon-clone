import React from "react";
import 'rsuite/dist/styles/rsuite-default.css';
import "../Header.css";
import {Icon} from "rsuite";


const Header=()=>{
    return(
        <div className="header">
            <img
            className="header-logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon"
            />
            <div className="header-search">
                <input type="text" className="header-search-input"/>
                <div className="header-search-icon">
                <Icon icon="search" size="lg" />
                </div>
            </div>
            <div className="header-nav">
                <div className="header-nav-item">
                    <span className="header-nav-item-line-1">
                        Hello
                    </span>
                    <span className="header-nav-item-line-2">
                        Sign in
                    </span>
                </div>

                <div className="header-nav-item">
                    <span className="header-nav-item-line-1">
                        Returns
                    </span>
                    <span className="header-nav-item-line-2">
                        Orders
                    </span>
                </div>

                <div className="header-nav-item">
                        <span className="header-nav-item-line-1">
                        Your
                    </span>
                    <span className="header-nav-item-line-2">
                        Prime
                    </span>
                </div>

                <div className="header-nav-item-basket">
                        <Icon icon="shopping-cart" size="2x"/>
                    <span className="header-nav-item-line-2 header-basket-count">
                        0
                    </span>
                </div>


            </div>
        </div>
    )
}
export default Header;