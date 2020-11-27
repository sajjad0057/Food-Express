import React, { Component } from 'react';
import {connect} from 'react-redux';



const mapStateToProps = state =>{
    //console.log("mapStateToProps :",state);
    return {
        a : state.dishes,    // In this object we can return store element as our needed.
        sample : state.sample
    }
}

class Home extends Component {
    componentDidMount(){
        console.log("Home Props : ", this.props);
        this.props.dispatch({
            type : "TEST",
            val : "Learn Redux",
        })
    }
    componentDidUpdate(){
        console.log("Updated Home Props : ", this.props)
    }
    render(){
        document.title = "REs | Taurant"
        return(
            <div>

            </div>
        )
    }
}

export default connect(mapStateToProps)(Home);

{/* React Redux provides a connect function for you to connect your component to the store */}
