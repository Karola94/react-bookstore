import React from "react";
import LoginPanel from "./LoginPanel";
import AddBookForm from "./AddBookForm";
import {Link} from "react-router-dom";
import {firebaseApp} from "../fbase";


class AdminPanel extends React.Component {

    constructor() {
        super();
        this.state = {           
            loggedIn: false            
        }                 
    }          

    changeLoggedIn = (newLogValue) => this.setState({loggedIn: newLogValue});
    
    componentDidMount() {
        if(localStorage.getItem("loggedIn")) {
            this.setState({loggedIn: localStorage.getItem("loggedIn")});
        }       
    }

    logOut = (event) => {
        event.preventDefault();

        firebaseApp.auth().signOut()
            .then( () => {                
                this.changeLoggedIn(false);
                localStorage.setItem("loggedIn", false);                
                console.log('Successfully log out');
            })
            .catch( (error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.loggedIn &&
                    <LoginPanel changeLoggedIn={this.changeLoggedIn} />
                }
                {this.state.loggedIn && 
                    <React.StrictMode>
                        <AddBookForm />
                        <Link to='/'><button type="button" className="btn btn-danger logOut" onClick={this.logOut}>Log out</button></Link>
                    </React.StrictMode>
                }
            </React.Fragment>           
        );
    }
}

export default AdminPanel;