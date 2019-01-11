import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Forgot from './components/Forgot';
import Register from './components/Register'
import Reset from './components/Reset'
import './App.css';

class App extends Component {
  render() {
    return (

        <section className="Auth_page">
        {/* <!-- Banner plus Start Your MBTI --> */}

            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="http://DeveloperLevel.com">
                        <img src="images/DevLevelLogoAndWordsWhite.5.25.png" alt="Helping Developers Grow"></img>
                        </a>
                    </div>
                </div>
            </nav>

            <div className="container">

                {/* <!-- assessment section --> */}
                <div className="col-sm-5 col-sm-push-6 questions">
                    <div className="center">
                        <a href="/questions">
                            Start Your <br></br>
                            <span className="assess"> mbti </span> <br></br>
                            Assessment
                        </a>
                    </div>
                </div>

                {/* <!-- divide page with or --> */}
                <div className="col-sm-1 divider">
                    <div className="line1"></div>
                    <hr className="hr1"></hr>
                    <div className="other">
                        OR
                    </div>
                    <hr className="hr2"></hr>
                    <div className="line2"></div>
                </div>

                <HashRouter>
                <Switch>
                    <Route path="/" component={Login} exact />
                    <Route path="/forgot" exact component={Forgot} />
                    <Route path="/register" component={Register} />
                    <Route path="/reset" component={Reset} />
                </Switch>
                </HashRouter>
            </div> 

        </section>

    );
  }
}

export default App;