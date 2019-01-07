import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Forgot from './components/Forgot';
import Register from './components/Register'
import './App.css';

class App extends Component {
  render() {
    return (

        <section class="Auth_page">
        {/* <!-- Banner plus Start Your MBTI --> */}

            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="http://DeveloperLevel.com">
                        <img src="images/DevLevelLogoAndWordsWhite.5.25.png" alt="Helping Developers Grow"></img>
                        </a>
                    </div>
                </div>
            </nav>

            <div class="container">

                {/* <!-- assessment section --> */}
                <div class="col-sm-5 col-sm-push-6 questions">
                    <div class="center">
                        <a href="/questions">
                            Start Your <br></br>
                            <span class="assess"> mbti </span> <br></br>
                            Assessment
                        </a>
                    </div>
                </div>

                {/* <!-- divide page with or --> */}
                <div class="col-sm-1 divider">
                    <div class="line1"></div>
                    <hr class="hr1"></hr>
                    <div class="other">
                        OR
                    </div>
                    <hr ClassName="hr2"></hr>
                    <div class="line2"></div>
                </div>

                <HashRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/forgot" exact component={Forgot} />
                    <Route path="/register" component={Register} />
                </Switch>
                </HashRouter>
            </div> 

        </section>

    );
  }
}

export default App;