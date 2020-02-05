import React, { StrictMode } from "react";
import Order from "./Order";
import Header from "./Header";
import Inventory from "./Inventory";
import { Link } from "react-router-dom";

import "../index.css";

class App extends React.Component {


    constructor() {
        super();
        this.state = {            
            order: []
        }
    }   

    addToOrder = (book) => {
        this.setState({
            order: [...this.state.order, book]
        })
    }

    removeFromOrder = (title) => {
        this.setState({
            order: this.state.order.filter(book => title !== book.name)
        })
    }

    render() {
        return(
            <StrictMode>
                <Header />
                <div className="row main">
                    <Order order={this.state.order} removeFromOrder={this.removeFromOrder} />
                    <Inventory books={this.state.books} addToOrder={this.addToOrder}/>                                  
                </div>
                <Link to='/admin'><button className="btn btn-warning goToAdmin">Admin Panel</button></Link>
            </StrictMode>
        );
    }
}

export default App;