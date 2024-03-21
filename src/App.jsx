import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './About'
import PriceList from './Price List'
import Contact from './Contact'
import {Switch,Route } from 'react-router-dom';
import Navbar from './Navbar';

const App = () => {
    return (
        <>
        <Navbar/>
        <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/about" component = {About}/>
        <Route exact path = "/price list" component = {PriceList}/>
        <Route exact path = "/contact" component = {Contact}/>
          
        </Switch>
        </>
    );
};

export default App;