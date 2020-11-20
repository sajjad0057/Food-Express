import React, { Component } from "react";
import DISHES from "../../data/dishes.js";
import MenuItem from "./MenuItem.jsx";
import DishDetail from "./DishDetail.jsx";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';


class Menu extends Component {
  state = {
    dishes: DISHES,
    selectedDish: null,
    modalOpen : false,
  };

  onDishSelect = (dish) => {
    //console.log("function Triggered----",dish);
    this.setState({
      selectedDish: dish,

    });
    this.toggleModal()
  };

  toggleModal = () =>{
      this.setState({
       modalOpen : !this.state.modalOpen   
      })
  }

  render() {
    const menu = this.state.dishes.map((item) => {
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
      details = <DishDetail dish={this.state.selectedDish} />;
    }
    return (
      <div className="container">
        <div className="row">
            <CardColumns>
                {menu}
            </CardColumns>
            <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
                <ModalBody>
                    {details}
                </ModalBody>
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

export default Menu;
