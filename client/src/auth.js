import React from "react";
import Bullbasaur from "./images/bullbasaur.png";

export default class Navigation extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="auth-container col-xl-5 col-sm-6">
                        <div className="account-wall">
                            <img className="bullbasaur-img" src={Bullbasaur} alt="Bullbasaur"/>
                            <p>Login to save your favourite Pokemon!</p>
                            <form className="form-login form-block">
                                <input type="text" className="form-control" placeholder="Email" required autofocus/>
                                <input type="password" className="form-control" placeholder="Password" required/>
                                <button className="btn btn-lg btn-success btn-block btn-login" type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}