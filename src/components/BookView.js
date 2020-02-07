import React from "react";

export default class BookView extends React.Component {

    render() {
        return(
            <div className="row bookView">                
                <div className="col-md-3 bookImg">
                    <img src={this.props.book.image} width="75" height="100" alt={this.props.book.name}/>
                    <p className="genre">{this.props.book.genre}</p>
                </div>
                <div className="col-md-6">
                    <b>{this.props.book.name}</b><br/>
                    <i>{this.props.book.author}</i><br/><br/>
                    <p>{this.props.book.desc}</p>
                </div>
                <div className="col-md-3 btnAddToOrder">
                    <button className="btn btn-secondary" onClick={(event) => this.props.addToOrder(this.props.book)}>Add to order</button>
                </div>              
            </div>
        );
    }
}