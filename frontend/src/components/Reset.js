
import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Register extends Component {
    constructor({props}){
        super({props})
 
        this.state = {
            password: "",
            password_confirm: "",
            token:props.params.resetToken
        }
        console.log("Props",this.state.token)
    }
    
    componentDidMount() {
        console.log("#### HERE #####",this.routeParam)
        const { token } = this.props.match.params
        console.log("### TOKEN =",this.routeParam)
    }

    async resetPass() {
        try {
            let body = {
                password:this.state.password,
                password_confirm:this.state.password_confirm
            }
            await axios.post(`http://localhost:8888/api/v1/reset?resetToken=${this.routeParam}`,body)
              .then(res => {
                window.location.href = "http://app.developerlevel.com/dashboard";
              })
        } catch(e) {
            // console.log("################### ERROR ###############\n",e)
            alert ("Leave something blank?")
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
       {console.log("### RESET.JS ",this.routeParam)} 

            <div className="at-form">

                <div className="at-title">
                    <h3>Create an Account</h3>
                </div>

                <div className="at-pwd-form">
                    <form id="at-pwd-form" >

                        <fieldset>


                            <div className="at-input form-group">
                                <label className="control-label" htmlFor="password">
                                    New Password
                                </label>
                                <input type="password" className="form-control" id="password" name="password"
                                    autoCapitalize="none" autoCorrect="off" autoComplete="new-password"
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
                                <span id="confirmMessage" className="confirmMessage" style={{float:'right'}}></span>
                                <span className="help-block hide"></span>
                            </div>


                            <button className="at-btn submit btn btn-lg btn-block btn-default" 
                            id="at-btn" onClick={() => this.resetPass()}>
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