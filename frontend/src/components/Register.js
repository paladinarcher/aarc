
import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Register extends Component {
    constructor(){
        super()

        this.state = {
            username: "",
            password: "",
            password_confirm: "",
            firstName: "",
            lastName: "",
            email: ""
        }
    }

    updateInfo(updatedInfo,target) {
        this.setState({
            [target]:updatedInfo
        })
    }

    registerUser() {
        let body = {
            email:this.state.username,
            username:this.state.username,
            password:this.state.password,
            password_confirm:this.state.password_confirm,
            firstName:this.state.firstName,
            lastName:this.state.lastName
        }
        let promise = axios.post('http://localhost:8888/api/v1/register',body)
        promise.then(res => {
            window.location.href = "./";
        })
    }

    
  render() {
    return (


        // <!-- registration form -->
        <div className="col-sm-5 col-sm-pull-6 align-middle atform">

            <div className="at-form">

                <div className="at-title">
                    <h3>Create an Account</h3>
                </div>

                <div className="at-pwd-form">
                    <form id="at-pwd-form" >

                        <fieldset>

                            <div className="at-input form-group">
                                <label className="control-label" htmlFor="username">
                                    Email
                                </label>
                                <input type="email" className="form-control" id="username" name="username"
                                    autoCapitalize="none" autoCorrect="off" autoComplete="username email"
                                    onChange={(e) => this.updateInfo(e.target.value,e.target.id)} value= {this.state.username}
                                    ></input>

                                <span className="help-block hide"></span>
                            </div>



                            <div className="at-input form-group">
                                <label className="control-label" htmlFor="password">
                                    Password
                                </label>
                                <input type="password" className="form-control" id="password" name="password"
                                    autoCapitalize="none" autoCorrect="off" autoComplete="new-password"
                                    onChange={(e) => this.updateInfo(e.target.value,e.target.id)} value= {this.state.password}
                                    ></input>

                                <span className="help-block hide"></span>
                            </div>


                            <div className="at-input form-group">
                                <label className="control-label" htmlFor="password_confirm">
                                    Password (again)
                                </label>
                                <input type="password" className="form-control" id="password_confirm" name="password_confirm"
                                    autoCapitalize="none" 
                                    onChange={(e) => this.updateInfo(e.target.value,e.target.id)} value= {this.state.password_confirm}
                                    ></input>
                                <span id="confirmMessage" className="confirmMessage" style={{float:'right'}}></span>
                                <span className="help-block hide"></span>
                            </div>


                            <div className="at-input form-group">
                                <label className="control-label" htmlFor="firstName">
                                    First Name
                                </label>
                                <input type="text" className="form-control" id="firstName" name="firstName"
                                    autoCapitalize="none" autoCorrect="off"
                                    onChange={(e) => this.updateInfo(e.target.value,e.target.id)} value= {this.state.firstName}
                                    ></input>
                                <span className="help-block hide"></span>
                            </div>


                            <div className="at-input form-group">
                                <label className="control-label" htmlFor="lastName">
                                    Last Name
                                </label>
                                <input type="text" className="form-control" id="lastName" name="lastName"
                                    autoCapitalize="none" autoCorrect="off"
                                    onChange={(e) => this.updateInfo(e.target.value,e.target.id)} value= {this.state.lastName}
                                    ></input>

                                <span className="help-block hide"></span>
                            </div>


                            <button type="submit" className="at-btn submit btn btn-lg btn-block btn-default" 
                            id="at-btn" onClick={() => this.registerUser()}>
                                Register Now!
                            </button>
                        </fieldset>
                    </form>
                </div>



                <div className="at-signin-link">
                    <p>
                        If you already have an account
                        <a href="/login" id="at-signIn" className="at-link at-signin">sign in</a>

                    </p>
                </div>

            </div>

        </div>


        );
    }
  }
  
  export default Register;