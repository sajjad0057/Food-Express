import React , { Component } from "react"
import DISHES from "../../data/dishes.js"
import MenuItem from "./MenuItem.jsx"
import DishDetail from "./DishDetail.jsx"


class Menu extends Component{
    state = {
        dishes : DISHES,
        selectedDish : null
    }

    onDishSelect = dish =>{
        console.log("function Triggered----",dish);
        this.setState({
            selectedDish:dish
        })
    }

    render(){
        const menu = this.state.dishes.map(item=>{
            return(
                <MenuItem dish = {item} key={item.id}
                dishDetail = {()=>this.onDishSelect(item)}
                />
            )
        })
        let details = null
        if(this.state.selectedDish !=null){
            details = <DishDetail dish = {this.state.selectedDish} />
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {menu}

                    </div>
                    <div className="col-6">
                        {details}
                    </div>
                </div>
            </div>
        )
    }
}


export default Menu;