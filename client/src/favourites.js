import React from "react";
import Heart from "./images/heart.png";
import {Link} from "react-router-dom";

export default function Favourites() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="auth-container col-xl-5 col-sm-6">
                    <div className="account-wall">
                        <img className="heart-img" src={Heart} alt="Heart"/>
                        <p>Create an account to save your favourite Pokemon!</p>
                        <form className="form-login form-block">
                            <Link to="/login"><button className="btn btn-lg btn-danger btn-block btn-login">Create an Account</button></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
