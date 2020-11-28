import React, { Component } from "react";
import MenuItem from "./MenuItem.jsx";
import DishDetail from "./DishDetail.jsx";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  //console.log("Menu.jsx state ---->",state);
  return {
    dishes: state.dishes,
    comments: state.comments,
  };
};

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

class Menu extends Component {
  state = {
    selectedDish: null,
    modalOpen: false,
  };
  componentDidMount() {
    //console.log("Menu State : ", this.state);
    console.log("Menu.jsx Props : ", this.props);
  }

  onDishSelect = (dish) => {
    //console.log("function Triggered----",dish);
    this.setState({
      selectedDish: dish,
    });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  render() {
    document.title = "REs | Taurant - Menu";
    const menu = this.props.dishes.map((item) => {
      return (
        <MenuItem
          dish={item}
          key={item.id}
          dishDetail={() => this.onDishSelect(item)}
        />
      );
    });
    let details = null;
    if (this.state.selectedDish != null) {
      const comments = this.props.comments.filter(
        (comment) => comment.dishId === this.state.selectedDish.id
      );
      details = (
        <DishDetail
          dish={this.state.selectedDish}
          comments={comments}
          addComment={this.props.addComment}
        />
      );
    }
    return (
      <div className="container">
        <div className="row">
          <CardColumns>{menu}</CardColumns>
          <Modal isOpen={this.state.modalOpen}>
            <ModalBody>{details}</ModalBody>
            <ModalFooter>
              <Button color="secondary " onClick={this.toggleModal}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);


  /* React-Redux provides a connect function for you to connect your component to the store */
  /* connect() function receive two parameter 1st one mapStateToProps and 2nd mapDispatchToProps..
     if don't have mapStateToProps connent() function receive null as a 1st parameter
 */

