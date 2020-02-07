import React from "react";
import {firebaseApp} from "../fbase";

class LoginPanel extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    auth = (event) => {
        event.preventDefault();
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then( () => {
                this.props.changeLoggedIn(true);
                localStorage.setItem("loggedIn", true);
            })
            .catch( () => {
                console.log('Unable to authenticate');
            })        
    }

    handleLoginChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }    

    render() {
        return (
            <form onSubmit={this.auth} className="logInForm">
                <label htmlFor="email" className="label">Email :
                    <input type="text" placeholder="email" id="email" name="email" className="form-control"  value={this.state.email} onChange={this.handleLoginChange} />
                </label>
                <label htmlFor="password" className="label">Password :
                    <input type="password" placeholder="password" id="password" name="password" className="form-control" value={this.state.password} onChange={this.handleLoginChange} />
                </label>
                <button type="submit" className="btn btn-success">Log in</button>
            </form>
        );
    }
}

export default LoginPanel;