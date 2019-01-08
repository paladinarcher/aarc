
import React, { Component } from 'react';
import '../App.css';

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
    
    onClick() {
        /* attach a submit handler to the form */
        // $("#at-pwd-form").submit(function (event) {
    
        //   /* stop form from submitting normally */
        //   event.preventDefault();
    
        //   /* get the action attribute from the <form action=""> element */
        //   var $form = $(this),
        //     url = $form.attr('action');
    
        //   /* Send the data using post */
        //   var posting = $.post(
        //     url,
        //     {
        //       username: $('#username').val(),
        //       password: $('#password').val(),
        //       loggedIn: true
        //     },
        //     function (data, status, jqXHR) {
        //       alert("AuthAPI Token: \n" + data.token) // access the user token from here.
        //     },
        //     "json"
        //   );
    
        //   /* redirects once logged in */
        //   posting.done(function (data) {
        //     window.location.assign("/dashboard");
        //   });
        // });
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
                    <form id="at-pwd-form" noValidate="" 
                    action="http://localhost:8888/api/v1/login" method="POST">
                        <fieldset>

                            <div className="at-input form-group">
                                <label className="control-label" htmlFor="username">
                                    Email
                                </label>
                                <input type="email" className="form-control" id="username" name="username"
                                    autoCapitalize="none" autoCorrect="off" 
                                    onChange={(e) => this.updateInfo(e.target.value,e.target.id)} value= {this.state.addy}></input>

                                <span className="help-block hide"></span>
                            </div>


                            <div className="at-input form-group">
                                <label className="control-label" htmlFor="password">
                                    Password
                                </label>
                                <input type="password" className="form-control" id="password" name="at-field-password"
                                    autoCapitalize="none" autoCorrect="off"
                                    onChange={(e) => this.updateInfo(e.target.value,e.target.id)} value= {this.state.pass}>
                                    </input>

                                <span className="help-block hide"></span>
                            </div>


                            <div className="at-pwd-link">
                                <p>

                                    <a href="#/forgot" id="at-forgotPwd" className="at-link at-pwd">Forgot your
                                        password?</a>

                                </p>
                            </div>

                            <button type="submit" className="at-btn submit btn btn-lg btn-block btn-default" id="at-btn">
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