import React from "react";
import LoginPanel from "./LoginPanel";
import AddBookForm from "./AddBookForm";
import AdminBookListing from "./AdminBookListing";
import {Link} from "react-router-dom";
import {fbase, firebaseApp} from "../fbase";


class AdminPanel extends React.Component {

    constructor() {
        super();
        this.state = {           
            loggedIn: false            
        }                 
    }          

    changeLoggedIn = (newLogValue) => this.setState({loggedIn: newLogValue});

    addNewBook = (book) => this.setState({books: [...this.state.books, book]});
    
    

    componentDidMount() {        
        this.ref = fbase.syncState('bookstore/books', {
            context: this,
            state: 'books',
            asArray: true
        });

        if(localStorage.getItem("loggedIn")) {
            this.setState({loggedIn: localStorage.getItem("loggedIn")});
        } 
    }

    componentWillUnmount() {
        fbase.removeBinding(this.ref);
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

    removeFromInventory = (title) => {
        this.setState({
            books: this.state.books.filter(book => title !== book.name)
        })
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.loggedIn &&
                    <LoginPanel changeLoggedIn={this.changeLoggedIn} />
                }
                {this.state.loggedIn && 
                    <div className="adminView">
                        <AddBookForm addNewBook={this.addNewBook} />
                        <AdminBookListing books={this.state.books} removeFromInventory={this.removeFromInventory} />
                        <Link to='/'><button type="button" className="btn btn-danger logOut" onClick={this.logOut}>Log out</button></Link>
                    </div>
                }
            </React.Fragment>           
        );
    }
}

export default AdminPanel;