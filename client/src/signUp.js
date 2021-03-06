import React from "react";
import Heart from "./images/heart.png";
import axios from "axios";
import qs from "query-string";
import {Link} from "react-router-dom";

export default class Login extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: "",
            error: "",
        }
    }

    handleRegistration = (e) => {
        e.preventDefault();
        axios({
            method: "post",
            url: "/api/register",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}, 
            data: qs.stringify({
                username: this.state.username, 
                password: this.state.password,
            })
        })
        .then(res => {
            if (res.data === true) {
                this.setState({error: ""});
                this.props.history.push('/favourites');
            } else {
                this.setState({error: res.data.message});
            }
        })
        .catch(error => console.log(error.res));
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
                            <input type="text" value={this.state.username} onChange={e => this.setState({username: e.target.value})} className="form-control" placeholder="Email" required autoFocus/>
                                <input type="password" value={this.state.password} onChange={e => this.setState({password: e.target.value})} className="form-control" placeholder="Password" required/>
                                <button className="btn btn-lg btn-danger btn-block btn-login" onClick={this.handleRegistration}>Sign Up</button>
                                <p>{this.state.error}</p>
                            </form>
                            <Link to="/login">Already have an account? Log in</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
