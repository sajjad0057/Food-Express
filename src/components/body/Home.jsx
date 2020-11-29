import React, { Component } from 'react';
import Loading from './Loading.js'

class Home extends Component {
    render(){
        document.title = "REs | Taurant"
        return(
            <div>
                <Loading/>
            </div>
        )
    }
}

export default Home;

