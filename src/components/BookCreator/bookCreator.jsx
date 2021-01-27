import React, { Component } from "react";
import "./bookCreator.css";

export default class BookCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Stateful Variables
      title: "",
      author: "",
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const book = {
      title: this.state.title,
      author: this.state.author,
    };
    this.props.addNewBook(book);
    this.setState({
      title: "",
      author: "",
    });
  }

  render() {
    return (
      <div>
        <hr />
        <center>
          <h3>Add a new Book!</h3>
        </center>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="row col-align">
            <div className="col-md-4">
              <label>Title: </label>
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="col-md-4">
              <label>Author: </label>
              <input
                type="text"
                name="author"
                value={this.state.author}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="col-md-4">
              <input type="submit" value="Add" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
