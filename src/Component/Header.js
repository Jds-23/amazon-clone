import React from "react";
import 'rsuite/dist/styles/rsuite-default.css';
import "../Header.css";
import {Icon} from "rsuite";
import {Link,useHistory} from "react-router-dom";
import {useStateValue} from "../Context/StateProvider";
import {auth} from "../firebase";


const Header=()=>{
    const [{basket,user},dispatch]=useStateValue();
    const history=useHistory();
    const handleAuthentication=()=>{
        if(user){
            auth.signOut();
        }
        else{
            history.push("/login")
        }
    }

    return(
        <div className="header">
            <Link to='/'>
                <img
                    className="header-logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazon"
                />
            </Link>

            <div className="header-search">
                <input type="text" className="header-search-input"/>
                <div className="header-search-icon">
                <Icon icon="search" size="lg" />
                </div>
            </div>
            <div className="header-nav">
                <div className="header-nav-item" onClick={handleAuthentication}>
                    <span className="header-nav-item-line-1">
                        Hello {user?.email}
                    </span>
                        <span className="header-nav-item-line-2">
                       {user?'Sign out':'Sign in'}
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
                    <Link to="/checkout">
                        <Icon icon="shopping-cart" size="2x"/>
                    </Link>
                    <span className="header-nav-item-line-2 header-basket-count">
                        {basket?.length}
                    </span>
                </div>


            </div>
        </div>
    )
}
export default Header;