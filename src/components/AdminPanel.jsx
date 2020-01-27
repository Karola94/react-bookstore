import React from "react";

class AdminPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            book : {
                name: "",
                author: "",
                desc: "",
                inStock: false,
                image: ""
            }           
        }
    }

    handleChange = (event) => {
        let newBook;
        
        if(event.target.name ==="inStock") {
            newBook = {
                ...this.state.book,
                [event.target.name]: event.target.checked
            };
        } else {
            newBook = {
                ...this.state.book,
                [event.target.name]: event.target.value
            };
        }
        
        this.setState({
            book: newBook
        });
    }

    addNewBook = (event) => {
        event.preventDefault();
      
        let newBook = {...this.state.book};     
        
        this.props.addBook(newBook);

        this.setState({            
            book: {
                name: "",
                author: "",
                desc: "",
                inStock: false,
                image: ""
            }
        });
    }

    render() {
        return (
            <div className="adminPanel col-md-4">
                <form onSubmit={this.addNewBook}>
                    <div className="form-group">
                        <label htmlFor="name">Book name : 
                            <input type="text" placeholder="Book name" id="name" name="name" className="form-control" value={this.state.book.name} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Book author : 
                            <input type="text" placeholder="Book author" id="author" name="author" className="form-control" value={this.state.book.author} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="desc">Book description : 
                            <textarea type="text" placeholder="Book description" id="desc" name="desc" className="form-control" value={this.state.book.desc} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div className="form-group">
                        <input type="checkbox" id="inStock" name="inStock" className="form-check-input" value={this.state.book.inStock} onChange={this.handleChange} />
                        <label htmlFor="inStock" className="form-check-label">in stock</label>                       
                    </div> 
                    <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                          </div>
                          <div className="custom-file">
                            <input type="text" className="custom-file-input" id="inputGroupFile01"
                              aria-describedby="inputGroupFileAddon01" name="image" value={this.state.book.image} onChange={this.handleChange} />
                            <label className="custom-file-label" htmlFor="inputGroupFile01">Choose image</label>
                          </div>
                        </div>                      
                            {/* <input type="text" placeholder="Book image" id="image" name="image" className="form-control" value={this.state.book.image} onChange={this.handleChange} />                        */}
                    </div>  
                    <button type="submit" className="btn btn-secondary addBook">Add Book</button>                     
                </form>                
            </div>
        );
    }
}

export default AdminPanel;