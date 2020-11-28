import React, { Component } from "react";
import { Form, Button, Input } from "reactstrap";
import { connect } from "react-redux";



  /* payload : {} is a object, in dispatch() function By this object
   send all info to store for performing something */

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (dishId, rating, author, comment) => {
      dispatch({
        type: "ADD_COMMENT",
        payload: {
          dishId: dishId,
          author: author,
          rating: rating,
          comment: comment,
        },
      });
    },
  };
};

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      rating: "",
      comment: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**if we want to set object property in veriable ,
     in the object veriable must be keep in 3rd Brackets [variable name] : value.
    it's like as python dictionery */

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };


  handleSubmit = (event) => {
    //console.log("CommentForm : ", this.state);
    this.props.addComment(this.props.dishId,this.state.rating,this.state.author,this.state.comment)
    this.setState({
      author: "",
      rating: "",
      comment: "",
    });
    event.preventDefault();
  };

  render() {
    console.log("Comment Form --->", this.props);
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="author"
            value={this.state.author}
            placeholder="Your Name"
            onChange={this.handleInputChange}
            required
          />
          <br />
          <Input
            type="select"
            name="rating"
            value={this.state.rating}
            onChange={this.handleInputChange}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
          <br />
          <Input
            type="textarea"
            name="comment"
            value={this.state.comment}
            placeholder="Write Comment"
            onChange={this.handleInputChange}
            required
          ></Input>
          <br />
          <div style={{ textAlign: "right" }}>
            <Button type="submit" color="secondary">
              Submit Comment
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default connect(null,mapDispatchToProps)(CommentForm);

/* connect() function receive two parameter 1st one mapStateToProps and 2nd mapDispatchToProps..
if don't have mapStateToProps connent() function receive null as a 1st parameter */
