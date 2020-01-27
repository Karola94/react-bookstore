import React, { StrictMode } from "react";
import Order from "./Order.jsx";
import Header from "./Header.jsx";
import Inventory from "./Inventory.jsx";

import "../index.css";

class App extends React.Component {


    constructor() {
        super();
        this.state = {
            books: [],
            order: []
        }
    }

    addNewBook = (book) => {
        let newBooks = [...this.state.books];

        newBooks.push(book);

        this.setState ({
            books: newBooks
        });
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
            </StrictMode>
        );
    }
}

export default App;