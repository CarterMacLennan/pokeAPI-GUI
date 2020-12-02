import React from "react";
import Bullbasaur from "./images/bullbasaur.png";

export default class Navigation extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="container auth-container">
                <div className="row justify-content-center">
                    <div className="col-sm-6 col-md-4 col-md-offset-4">
                        <div className="account-wall">
                            <img className="profile-img" src={Bullbasaur} alt="Bullbasaur"/>
                            <form className="form-login">
                                <input type="text" className="form-control" placeholder="Email" required autofocus/>
                                <input type="password" className="form-control" placeholder="Password" required/>
                                <button className="btn btn-lg btn-success btn-block" type="submit">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}