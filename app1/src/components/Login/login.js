import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as Mui from 'material-ui';
import { Link } from 'react-router';
import './login.css'


class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
        this.handleSubmit = this.handleLoginSubmit.bind(this);
        this.hanleInput = this.hanleInput.bind(this);

    }


    handleLoginSubmit(e) {
        e.preventDefault();
        var email = e.target.email.value;
        var password = e.target.password.value;
        var userObject = {
            "email": email, "password": password
        };
        this.props.loginRequest(userObject);
    }
    handleInput(evt) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }


    render() {

        return (
            <MuiThemeProvider>
                <div>
                    <div className="signup-loginContainer">
                        <Mui.Paper className="signup-paper">
                            <form>
                               
                                <Mui.TextField
                                    ref="email"
                                    hintText="E-mail"
                                    floatingLabelText="E-mail"
                                    fullWidth={true}
                                />
                                 <Mui.TextField
                                    ref="password"
                                    hintText="Enter Password"
                                    floatingLabelText="Password"
                                    fullWidth={true}
                                />
                               

                                <div>

                                    <Mui.RaisedButton label="Login"
                                        primary={true}
                                        className="signup-loginBtn"
                                        onTouchTap={this.handelSignup} />

                                </div>
                            </form>
                        </Mui.Paper>
                        {/*<div className="signup-buttonsDiv">
                            <Link to="/login">
                                <Mui.FlatButton
                                    label="Login"
                                    className="signup-flatButton"
                                />
                            </Link>
                        </div>*/}

                    </div>
                </div>
            </MuiThemeProvider>
        )

    }



}
export default LoginComponent;