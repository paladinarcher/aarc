
import React, { Component } from 'react';
import '../App.css';

class Login extends Component {
  render() {
    return (

        // <!-- login forms -->
        <div class="col-sm-5 col-sm-pull-6 align-middle atform">

            <div class="at-form">

                <div class="at-title">
                    <h3>Sign In</h3>
                </div>

                <div class="at-pwd-form">
                    <form id="at-pwd-form" novalidate="" 
                    action="http://localhost:3001/users/authenticate" method="POST">
                        <fieldset>

                            <div class="at-input form-group">
                                <label class="control-label" for="username">
                                    Email
                                </label>
                                <input type="email" class="form-control" id="username" name="username"
                                    autocapitalize="none" autocorrect="off"></input>

                                <span class="help-block hide"></span>
                            </div>


                            <div class="at-input form-group">
                                <label class="control-label" for="password">
                                    Password
                                </label>
                                <input type="password" class="form-control" id="password" name="at-field-password"
                                    autocapitalize="none" autocorrect="off"></input>

                                <span class="help-block hide"></span>
                            </div>


                            <div class="at-pwd-link">
                                <p>

                                    <a href="#/forgot" id="at-forgotPwd" class="at-link at-pwd">Forgot your
                                        password?</a>

                                </p>
                            </div>

                            <button type="submit" class="at-btn submit btn btn-lg btn-block btn-default" id="at-btn">
                                Sign In
                            </button>
                        </fieldset>
                    </form>
                </div>

                <div class="at-signup-link">
                    <p>
                        Don't have an account?&nbsp;
                        <a href="#/register" id="at-signUp" class="at-link at-signup">Register</a>
                    </p>
                </div>


            </div>

        </div>

        );
    }
  }
  
  export default Login;