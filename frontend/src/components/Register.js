
import React, { Component } from 'react';
import '../App.css';

class Register extends Component {
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
                                <label className="control-label" for="username">
                                    Email
                                </label>
                                <input type="email" className="form-control" id="username" name="username"
                                    autocapitalize="none" autocorrect="off" autocomplete="username email"></input>

                                <span className="help-block hide"></span>
                            </div>



                            <div className="at-input form-group">
                                <label className="control-label" for="password">
                                    Password
                                </label>
                                <input type="password" className="form-control" id="password" name="password"
                                    autocapitalize="none" autocorrect="off" autocomplete="new-password"></input>

                                <span className="help-block hide"></span>
                            </div>


                            <div className="at-input form-group">
                                <label className="control-label" for="password_again">
                                    Password (again)
                                </label>
                                <input type="password" className="form-control" id="password_again" name="password_again"
                                    autocapitalize="none" onkeyup="checkPass(); return false;"></input>
                                <span id="confirmMessage" className="confirmMessage" style={{float:'right'}}></span>
                                <span className="help-block hide"></span>
                            </div>


                            <div className="at-input form-group">
                                <label className="control-label" for="at-field-first_name">
                                    First Name
                                </label>
                                <input type="text" className="form-control" id="at-field-first_name" name="firstName"
                                    autocapitalize="none" autocorrect="off"></input>

                                <span className="help-block hide"></span>
                            </div>



                            <div className="at-input form-group">
                                <label className="control-label" for="at-field-last_name">
                                    Last Name
                                </label>
                                <input type="text" className="form-control" id="at-field-last_name" name="lastName"
                                    autocapitalize="none" autocorrect="off"></input>

                                <span className="help-block hide"></span>
                            </div>


                            <button type="submit" className="at-btn submit btn btn-lg btn-block btn-default" id="at-btn">
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