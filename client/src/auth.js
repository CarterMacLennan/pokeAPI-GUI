import React from "react";
import Bullbasaur from "./images/bullbasaur.png";
import axios from "axios";
import qs from "query-string";

export default class Navigation extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: "",
        }
    }

    handleRegistration = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios({
            method: "post",
            url: "/api/login",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}, 
            data: qs.stringify({
                username: this.state.username, 
                password: this.state.password,
            })
        })
        .then(res => console.log(res));
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
                                <input type="text" value={this.state.username} onChange={e => this.setState({username: e.target.value})} className="form-control" placeholder="Email" required autoFocus/>
                                <input type="password" value={this.state.password} onChange={e => this.setState({password: e.target.value})} className="form-control" placeholder="Password" required/>
                                <button className="btn btn-lg btn-success btn-block btn-login" onClick={this.handleRegistration}>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}