import React from "react";
import Heart from "./images/heart.png";

export default class Favourites extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="auth-container col-xl-5 col-sm-6">
                        <div className="account-wall">
                            <img className="heart-img" src={Heart} alt="Heart"/>
                            <p>Create an account to save your favourite Pokemon!</p>
                            <form className="form-login form-block">
                                <a href="/login" className="btn btn-lg btn-danger btn-block btn-login" type="submit">Create an Account</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}