import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../styles.css';
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends Component{
    render(){
        return(
            <div>
                <p>HELLO FROM THE HOME PAGE</p>
                <nav className = 'navbar navbar-expand-lg navbar-light bg-light'>
                    <ul className = 'navbar-nav mr-auto'>
                        <li className = 'nav-item'>
                            <Link to = {'/assets'} className = 'nav-link'>View Assets</Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to = {"/workorders"} className = 'nav-link'>View WorkOrders</Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link className = 'nav-link' to = {'/createWorkorders'}>Create WorkOrder</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Home;