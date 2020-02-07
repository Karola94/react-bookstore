import React from "react";


class AddBookForm extends React.Component {
    constructor() {
        super();
        this.state = {                     
            book: {
                name: "",
                author: "",
                desc: "",
                inStock: false,
                image: "",
                genre: ""
            }
        }
    }

    addNewBook = (event) => {
        event.preventDefault();     
        let newBook = { ...this.state.book };
        
        this.props.addNewBook(newBook);

        this.setState({                     
            book: {
                name: "",
                author: "",
                desc: "",
                inStock: false,
                image: "",
                genre: ""
            }
        });        
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
    

    render() {
        return (
            <React.StrictMode>
                <div className="adminPanel col-md-4">
                    <form onSubmit={this.addNewBook}>
                        <div className="form-group">
                            <label htmlFor="name" className="label">Book name : 
                                <input type="text" placeholder="Book name" id="name" name="name" className="form-control" value={this.state.book.name} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="author" className="label">Book author : 
                                <input type="text" placeholder="Book author" id="author" name="author" className="form-control" value={this.state.book.author} onChange={this.handleChange}/>
                            </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="genre" className="label">Book genre : 
                                <input type="text" placeholder="Book genre" id="genre" name="genre" className="form-control" value={this.state.book.genre} onChange={this.handleChange}/>
                            </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="desc" className="label">Book description : 
                                <textarea type="text" placeholder="Book description" id="desc" name="desc" className="form-control" value={this.state.book.desc} onChange={this.handleChange}/>
                            </label>
                        </div>
                        <div className="form-group">
                            <input type="checkbox" id="inStock" name="inStock" className="form-check-input" value={this.state.book.inStock} onChange={this.handleChange} />
                            <label htmlFor="inStock" className="form-check-label">in stock</label>                       
                        </div> 
                        <div className="md-form">
                          <div className="file-field">
                            <div className="btn btn-primary btn-sm float-left chooseImg">
                              <span>Choose image</span>
                              <input type="file" />
                            </div>
                            <div className="file-path-wrapper">
                              <input className="file-path validate" type="text" placeholder="Upload your file" />
                            </div>
                          </div>
                        </div> 
                        <button type="submit" className="btn btn-secondary addBook">Add Book</button>                     
                    </form>                
                </div>                
            </React.StrictMode>
        );
    }
}

export default AddBookForm;