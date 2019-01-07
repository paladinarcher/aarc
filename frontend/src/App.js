import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <section class="Auth_page">

      <nav class="navbar navbar-inverse">
          <div class="container-fluid">
              <div class="navbar-header">
                  <a class="navbar-brand" href="http://DeveloperLevel.com">
                      <img src="DevLevelLogoAndWordsWhite.5.25.png" alt="Programmer Development"></img>
                  </a>
              </div>
          </div>
      </nav>



      <div class="container">

           {/* assessment section  */}
          <div class="col-sm-5 col-sm-push-6 questions">
              <div class="center">
                  <a href="/questions">
                      Start Your </br>
                      <span class="assess"> mbti </span> </br>
                      Assessment
                  </a>
              </div>
          </div>

           {/* divide page with or  */}
          <div class="col-sm-1 divider">
              <div class="line1"></div>
              <hr class="hr1"></hr>
              <div class="other">
                  OR
              </div>
              <hr class="hr2"></hr>
              <div class="line2"></div>
          </div>

          {/* login forms  */}
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

                                      <a href="/pw-recovery.html" id="at-forgotPwd" class="at-link at-pwd">Forgot your
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
                          Don't have an account?
                          <a href="/register.html" id="at-signUp" class="at-link at-signup">Register</a>

                      </p>
                  </div>


              </div>

          </div>

      </div>

  </section>
    );
  }
}

export default App;
