
import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Login extends Component {
    constructor(){
        super()

        this.state = {
            username: "",
            password: ""
        }
    }

    updateInfo(updatedInfo,target) {
        this.setState({
            [target]:updatedInfo
        })
    }
    
    loginUser() {
        let body = {
            username:this.state.username,
            password:this.state.password
        }
        axios.post('http://localhost:8888/api/v1/login',body)
        .then(res => {
            console.log("res:\n",res)
            window.location.href = "http://app.developerlevel.com/dashboard";
        })
    }

  render() {
    return (

        // <!-- login forms -->
        <div className="col-sm-5 col-sm-pull-6 align-middle atform">

            <div className="at-form">

                <div className="at-title">
                    <h3>Sign In</h3>
                </div>

                <div className="at-pwd-form">
                    <form id="at-pwd-form" noValidate="" >
                        <fieldset>

                            <div className="at-input form-group">
                                <label className="control-label" htmlFor="username">
                                    Email
                                </label>
                                <input type="email" className="form-control" id="username" name="username"
                                    autoCapitalize="none" autoCorrect="off" 
                                    onChange={(e) => this.updateInfo(e.target.value,e.target.id)} value= {this.state.username}></input>

                                <span className="help-block hide"></span>
                            </div>


                            <div className="at-input form-group">
                                <label className="control-label" htmlFor="password">
                                    Password
                                </label>
                                <input type="password" className="form-control" id="password" name="at-field-password"
                                    autoCapitalize="none" autoCorrect="off"
                                    onChange={(e) => this.updateInfo(e.target.value,e.target.id)} value= {this.state.password}>
                                    </input>

                                <span className="help-block hide"></span>
                            </div>


                            <div className="at-pwd-link">
                                <p>

                                    <a href="#/forgot" id="at-forgotPwd" className="at-link at-pwd">Forgot your
                                        password?</a>

                                </p>
                            </div>

                            <button type="submit" className="at-btn submit btn btn-lg btn-block btn-default" 
                            id="at-btn" onClick={() => this.loginUser()}>
                                Sign In
                            </button>
                        </fieldset>
                    </form>
                </div>

                <div className="at-signup-link">
                    <p>
                        Don't have an account?&nbsp;
                        <a href="#/register" id="at-signUp" className="at-link at-signup">Register</a>
                    </p>
                </div>


            </div>

        </div>

        );
    }
  }
  
  export default Login;