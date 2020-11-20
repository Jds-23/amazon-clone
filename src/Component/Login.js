import React, {useState} from "react";
import "./Css/Login.css";
import {Link,useHistory} from "react-router-dom";
import {auth} from "../firebase";

const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const history=useHistory();

    const signIn=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
            .then(auth=>{
                history.push("/");
            })
            .catch(error=>alert(error.message));
    }
    const register=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                console.log(auth);
                if(auth){
                    history.push('/');
                }
            })
            .catch(error=>alert(error.message));

    }

    return(
        <div className="login">
            <Link to="/">
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt=""
                className="login-logo"
                />
            </Link>
            <div className="login-container">
                <h1>
                    Sign-in
                </h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button className="login-sign-in-button" onClick={signIn}>Sign in</button>
                </form>
                    <p>
                        By signing-in you agree to the AMAZON BY JDS Conditions of Use & Sale. Please
                        see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>
                    <button className="login-sign-up-button" onClick={register}>Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login;