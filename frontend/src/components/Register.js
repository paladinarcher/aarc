
import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Register extends Component {
    constructor(){
        super()

        this.state = {
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

    async registerUser() {
        try {
            let body = {
                email:this.state.email,
                password:this.state.password,
                password_confirm:this.state.password_confirm,
                firstName:this.state.firstName,
                lastName:this.state.lastName
            }
            await axios.post('http://stage.developerlevel.com:8888/api/v1/register',body)
                .catch(() => console.log("### Error: Line 34 in Register.js"));
            // window.location.href = "http://localhost:3006/";
            window.location.href = "http://app.developerlevel.com/signin";
        } catch(e) {
            alert ("Leave something blank?")
        }
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
                    <form method="POST" id="at-pwd-form" >

                        <fieldset>

                            <div className="at-input form-group">
                                <label className="control-label" htmlFor="email">
                                    Email
                                </label>
                                <input type="email" className="form-control" id="email" name="email"
                                    autoCapitalize="none" autoCorrect="off" autoComplete="email email"
                                    onChange={(e) => this.updateInfo(e.target.value,e.target.id)} value= {this.state.email}
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


                            <button className="at-btn submit btn btn-lg btn-block btn-default" 
                            id="at-btn" type="button" onClick={() => this.registerUser()}>
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