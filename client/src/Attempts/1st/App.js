import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './styles.css';
import Home from './Components/Home.js';
import Assets from './Components/List.js';
import WorkOrders from './Components/WorkOrders.js';
import CreateWO from './Components/CreateWO.js';
import EditWO from './Components/EditWO.js';
import AlertMessage from './Components/AlertEmail.js';
import Chart from './Components/GraphContainer.js';
import Asset from './Components/Asset.js'
import UpdateTable from './Components/updateTable';
import NotifTable from './Components/notifications';

class App1 extends Component{
    
    render(){
    
        return(
        <Router>
            <div>
                <Switch>
                    <Route exact path = '/' component = {Home}/>.
                    <Route path = '/Assets' component = {Assets} />
                    <Route path = '/workorders' component = {WorkOrders} />
                    <Route path = '/createWorkorder' component = {CreateWO} />
                    <Route path = '/editWorkorder' component = {EditWO} />
                    <Route path = '/alertMessage' component = {AlertMessage}/>
                    <Route path = '/chart' component = {Chart} />
                    <Route path = '/Asset' component = {Asset} />
                    <Route path = '/:A_id' children = {Asset} />
                    <Route path = '/updates' component = {UpdateTable}/>
                    <Route path = '/notifications' component = {NotifTable}/>
                </Switch>
            </div>
        </Router>
        )
    }
}

export default App1;
