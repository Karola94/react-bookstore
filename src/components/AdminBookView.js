import React from "react";

export default class AdminBookView extends React.Component {

    render() {        
        return(
            <li className="adminBookView">                
                <span> {this.props.book.name}, {this.props.book.author} </span>           
                <button className="btn btn-danger" onClick={(event) => this.props.removeFromInventory(this.props.book.name)}>Remove</button>                             
            </li>
        );
    }
}