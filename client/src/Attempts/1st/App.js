import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './styles.css';
import Home from './Components/Home.js';
import Assets from './Components/List.js';
import WorkOrders from './Components/WorkOrders.js';
import CreateWO from './Components/CreateWO.js';
import EditWO from './Components/EditWO.js';

class App1 extends Component{
    
    render(){
    
        return(
        <Router>
            <div>
                <h1>Project App1 Page</h1>
                <Switch>
                    <Route exact path = '/' component = {Home}/>.
                    <Route path = '/assets' component = {Assets} />
                    <Route path = '/workorders' component = {WorkOrders} />
                    <Route path = '/createWorkorders' component = {CreateWO} />
                    <Route path = '/workorders/edit' component = {EditWO} />
                </Switch>
            </div>
        </Router>
        )
    }
}

export default App1;