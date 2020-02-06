import React from "react";
import LoginPanel from "./LoginPanel";
import AddBookForm from "./AddBookForm";


class AdminPanel extends React.Component {

    constructor() {
        super();
        this.state = {           
            loggedIn: false            
        }                 
    }          

    changeLoggedIn = (newLogValue) => this.setState({loggedIn: newLogValue});    

    render() {
        return (
            <React.Fragment>
                {!this.state.loggedIn &&
                    <LoginPanel changeLoggedIn={this.changeLoggedIn} />
                }
                {this.state.loggedIn && 
                    <AddBookForm />
                }
            </React.Fragment>           
        );
    }
}

export default AdminPanel;