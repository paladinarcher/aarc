
import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Forgot extends Component {
    constructor(){
        super()

        this.state = {
            email: ""
        }
    }

    async resetPassword() {
        try {
            let data = {
                email:this.state.email
            }
            await axios.post('http://localhost:8888/api/v1/requestreset',data)
            .catch('error', (e) => {
                console.error(`### Forgot.js, line 21: ${e.message}`)
            });
            console.log("### HERE: ",data)
        } catch(e) {
            console.log("resetPassword failed (Forgot.js line 24)",e)
        }
        window.location = "http://localhost:3006/";
    }

    updateInfo(updatedInfo,target) {
        this.setState({
            [target]:updatedInfo
        })
    }

  render() {
    return (
<div>
    <div className="col-sm-5 col-sm-pull-6 align-middle atform">

      <div className="at-form">

          <div className="at-title">
              <h3>Password Reset</h3>
          </div>

          <div className="at-pwd-form">
                    <form id="at-pwd-form" noValidate="" >
                        <fieldset>


                            <div className="at-input form-group">
                                <label className="control-label" htmlFor="at-field-email">
                                    Email
                                </label>
                                <input type="email" className="form-control" id="email" name="email"
                                autoCapitalize="none" autoCorrect="off"
                                onChange={(e) => this.updateInfo(e.target.value,e.target.id)} value= {this.state.email}
                                ></input>

                                <span className="help-block hide"></span>
                            </div>

                            <button type="submit" className="at-btn submit btn btn-lg btn-block btn-default" 
                            id="at-btn"  onClick={() => this.resetPassword()}>
                                Email Reset Link
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


      </div>  {/* <!-- end of class at-form --> */}
    </div>
</div>

        );
    }
  }
  
  export default Forgot;