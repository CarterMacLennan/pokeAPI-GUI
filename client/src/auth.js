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
                    <div className="auth-container col-md-offset-4 col-md-6 col-sm-6">
                        <div className="account-wall">
                            <img className="profile-img" src={Bullbasaur} alt="Bullbasaur"/>
                            <form className="form-login form-block">
                                <input type="text" className="form-control" placeholder="Email" required autofocus/>
                                <input type="password" className="form-control" placeholder="Password" required/>
                                <button className="btn btn-lg btn-success btn-block btn-login" type="submit">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}