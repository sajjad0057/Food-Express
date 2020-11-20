import React from 'react';
import Menu from './Menu.jsx';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import { Route, Redirect } from 'react-router-dom';



const Body = () => {
  return (
    <div>
        <Route path="/" exact component={Home}/>
        <Route path="/menu" exact component={Menu}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/about" exact component={About}/>
    </div>
  );
};

export default Body;
