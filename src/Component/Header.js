import React,{useState} from "react";
import "./Css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link,useHistory} from "react-router-dom";
import {useStateValue} from "../Context/StateProvider";
import {auth} from "../firebase";
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Header=()=>{
    // eslint-disable-next-line
    const [{basket,user},dispatch]=useStateValue();
    const history=useHistory();
    const [drawer, setDrawer] = useState(false);

    const handleDrawer=()=>{
        setDrawer(true);
    }

    const handleAuthentication=()=>{
        if(user){
            auth.signOut();
        }
        else{
            history.push("/login")
        }
    }
    const handleCheckout=()=>{
        if(user){
            history.push("/checkout");
        }
        else{
            alert("You must Login");
        }
    }
    const handleOrders=()=>{
        if(user){
            history.push("/orders");
        }
        else{
            alert("You must Login");
        }
    }

    return(
        <div className="header">
            <div className="header-menu-button hide-on-lg" onClick={handleDrawer}>
            <MenuIcon/>
            </div>
            <Drawer  open={drawer} onClose={()=>setDrawer(false)}>
                {drawer?<CloseIcon fontSize="large" className="header-drawer-close" onClick={() => setDrawer(false)}/>
                    : <></>}
                <div className="header-drawer">
                    <div className="header-drawer-user" onClick={handleAuthentication}>
                        <div>
                        <strong >
                        Hello, {user?.email.substring(0,5)} {user?'Sign out':'Sign in'}
                        </strong>
                        </div>
                    </div>
                    <div className="header-drawer-item" onClick={handleOrders}>
                    <span >
                        Return & Orders
                    </span>
                    </div>
                    <div className="header-drawer-item">
                    <span >
                       Your Prime
                    </span>
                    </div>
                </div>
            </Drawer>
            <Link to='/'>
                <img
                    className="header-logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazon"
                />
            </Link>
            <div className="header-search hide-on-sm">
                <input type="text" className="header-search-input"/>
                <SearchIcon className="header-search-icon"/>
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

                <div className="header-nav-item hide-on-sm" onClick={handleOrders}>
                    <span className="header-nav-item-line-1">
                        Returns
                    </span>
                    <span className="header-nav-item-line-2">
                        Orders
                    </span>
                </div>

                <div className="header-nav-item hide-on-sm">
                        <span className="header-nav-item-line-1">
                        Your
                    </span>
                    <span className="header-nav-item-line-2">
                        Prime
                    </span>
                </div>

                <div className="header-nav-item-basket">
                        <ShoppingBasketIcon onClick={handleCheckout}/>
                    <span className="header-nav-item-line-2 header-basket-count">
                        {basket?.length}
                    </span>
                </div>


            </div>
            <div className="header-search-mob hide-on-lg">
                <input type="text" className="header-search-input"/>
                <SearchIcon className="header-search-icon"/>
            </div>
        </div>
    )
}
export default Header;