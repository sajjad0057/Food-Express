import React, { Component } from "react";
import MenuItem from "./MenuItem.jsx";
import DishDetail from "./DishDetail.jsx";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
  };
};

class Menu extends Component {
  state = {
    selectedDish: null,
    modalOpen: false,
  };
  componentDidMount() {
    //console.log("Menu State : ", this.state);
    console.log("Menu Props : ", this.props);
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
        <DishDetail dish={this.state.selectedDish} comments={comments} />
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

export default connect(mapStateToProps)(Menu);

{
  /* React-Redux provides a connect function for you to connect your component to the store */
}
