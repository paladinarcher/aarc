
import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Reset extends Component {
    constructor(){
        super()
        this.state = {
            password: "",
            password_confirm: "",
            token: ""
        }
    }
    
    componentDidMount() {
        const token = this.props.match.params.resetToken;
        this.setState({token})
        if (token) console.log("#### token acquired #####")
    }

    async resetPass() {
        try {
            let body = {
                password:this.state.password,
                password_confirm:this.state.password_confirm
            }
            await axios.post(`http://localhost:8888/api/v1/reset?resetToken=${this.state.token}`,body)
                .catch(() => console.log("### error in Reset.js, line 28 "));
                alert("Password reset!")
                window.location.href = "http://localhost:3006/";
                //   window.location.href = "http://app.developerlevel.com/signin";
            } catch(e) {
            console.log ("### ERROR: Reset.js, line 34: resetPass catch =",e)
        }
    }

    
    updateInfo(updatedInfo,target) {
        this.setState({
            [target]:updatedInfo
        })
    }

  render() {
    return (

        // <!-- registration form -->
        <div className="col-sm-5 col-sm-pull-6 align-middle atform">

            <div className="at-form">

                <div className="at-title">
                    <h3>Enter a new password</h3>
                </div>

                <div className="at-pwd-form">
                    <section id="at-pwd-form" >

                        <fieldset>


                            <div className="at-input form-group">
                                <label className="control-label" htmlFor="password">
                                    New Password
                                </label>
                                <input type="password" className="form-control" id="password" name="password"
                                    autoCapitalize="none" autoCorrect="off" 
                                    onChange={(e) => this.updateInfo(e.target.value,e.target.id)} value= {this.state.password}
                                    ></input>

                                <span className="help-block hide"></span>
                            </div>


                            <div className="at-input form-group">
                                <label className="control-label" htmlFor="password_confirm">
                                    New Password (again)
                                </label>
                                <input type="password" className="form-control" id="password_confirm" name="password_confirm"
                                    autoCapitalize="none" 
                                    onChange={(e) => this.updateInfo(e.target.value,e.target.id)} value= {this.state.password_confirm}
                                    ></input>
                            </div>


                            <button className="at-btn submit btn btn-lg btn-block btn-default" 
                            id="at-btn" onClick={() => this.resetPass()}>
                                Make it so!
                            </button>
                        </fieldset>
                    </section>
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
  
  export default Reset;