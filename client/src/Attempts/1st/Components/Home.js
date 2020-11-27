import React, { Component, Fragment } from 'react';
import {Link} from "react-router-dom";
import '../styles.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component{
    render(){
        return(
            <Fragment>

            <Container fluid>
                <Row>
                    <h1>Bay Area Rapid Transit</h1>
                </Row>
                <Row>
                <h4><small>Capital Project Managment Database</small></h4>
                </Row>
            </Container>
            <Navbar expand = 'lg' sticky = 'top' bg = 'dark' variant = 'dark'>
                <Navbar.Brand>
                    <img src = './train.png' alt = "BART" width = '30' height = '30'></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
                <Nav className = 'mr-auto'>
                    <Nav.Link >
                        <Link to = {'/'} className = 'nav-link'>HOME</Link>
                    </Nav.Link>
                    <Nav.Link >
                        <Link to = {'/assets'} className = 'nav-link'>Assets</Link>
                    </Nav.Link>
                    <Nav.Link >
                        <Link to = {'/workorders'} className = 'nav-link'>Workorders</Link>
                    </Nav.Link>
                    <Nav.Link >
                        <Link to = {'/createWorkorders'} className = 'nav-link'>Create Workorder</Link>
                    </Nav.Link>
                    <NavDropdown title = 'Search Database'>
                        <NavDropdown.Item href = 'assetSearch'>Assets</NavDropdown.Item>
                        <NavDropdown.Item href = 'WOSearch'>WorkOrders</NavDropdown.Item>
                        <NavDropdown.Item href = 'projectsSearch'>Projects</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>

            <Card style= {{textAlign : "left"}}>
                <h1 style = {{bg : 'lightgrey'}}>Notifications</h1>
            </Card>

        <div className = "list-group">
            <a href = "#alertPage" className = "list-group-item list-group-item-danger">Alert/Danger<span className = "badge">2</span></a>
            <a href = "#infoPage" className = "list-group-item list-group-item-info">Info<span className = "badge">5</span></a>
            <a href = "#successPage" className = "list-group-item list-group-item-success">Success<span className = "badge">3</span></a>
            <a href = "#progPage" className = "list-group-item list-group-item-warning">Progess<span className = "badge">4</span></a>
        </div>
        <div className = "container-fluid">
            <div className = "page-header">
                <h3>Recent Updates</h3>
            </div>
        </div>
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                <th scope="col-lg-5">Workorders</th>
                <th scope="col-lg-5">Involved Asset</th>
                <th scope="col-lg-2">PM/CM</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>615648</td>
                    <td>AC-23</td>
                    <td>PM</td>
                </tr>
                <tr>
                    <td>614568 [UPDATED]</td>
                    <td>TC-65</td>
                    <td>CM</td>
                </tr>
                <tr>
                    <td>614568</td>
                    <td>TC-65</td>
                    <td>CM</td>
                </tr>
                <tr>
                    <td>615646</td>
                    <td>MB-13</td>
                    <td>PM</td>
                </tr>
                <tr>
                    <td>615876</td>
                    <td>AD-47</td>
                    <td>CM</td>
                </tr>
            </tbody>
        </table>

        </Fragment>
        )
    }
}

export default Home;
