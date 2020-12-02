import React, { Component, Fragment } from 'react';
import {Link} from "react-router-dom";
import '../styles.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
//import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown'

import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component{

    constructor(props){
        super(props)
        this.state ={
            search: ''
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(event){
        this.setState({
            [event.target.name] : [event.target.value]
        })
    }
    render(){
        return(
        <div>
           
            <Fragment>
                <Container fluid>
                    <Row>
                        <h1><strong>Bay Area Rapid Transit</strong></h1>
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
                            <Link to = {'/Assets'} className = 'nav-link'>Assets</Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to = {'/workorders'} className = 'nav-link'>Workorders</Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to = {'/createWorkorder'} className = 'nav-link'>Create Workorder</Link>
                        </Nav.Link>
                        <Form inline>
                            <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                                <p style = {{color:"grey", margin:1}}>Search Database</p>
                            </Form.Label>
                            <Dropdown>
                                <Dropdown.Toggle  id="dropdown-custom-components">
                                Custom toggle
                                </Dropdown.Toggle>

                                <Dropdown.Menu >
                                <Dropdown.Item ><Link to = {{pathname : '/Assets', state: {
                                    assetID: this.state.search
                                }}}>Assets</Link></Dropdown.Item>
                                <Dropdown.Item ><Link to = {'/workorders/' + this.state.search}>Workorders</Link></Dropdown.Item>
                                <Dropdown.Item ><Link to = {''}> Projects</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <FormControl name = "search" type="text" placeholder="Search" className="mr-sm-2" onChange = {this.onChange} value = {this.state.search}/>
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Nav>
                </Navbar>

                <Card style= {{textAlign : "left", bg : 'lightgrey'}}>
                    <h2><u>Notifications</u></h2>
                </Card>
                <Accordion>  
                        <Accordion.Toggle as = {Card.Header} eventKey = "0">
                            Alert <Badge variant = 'danger'>Value</Badge>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey = '0'>
                            <Card.Body>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Asset #</th>
                                        <th>Project</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>615648</td>
                                        <td>AC-23</td>
                                        <td>PM</td>
                                    </tr>
                                </tbody>
                            </Table>
                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Toggle as = {Card.Header} eventKey = "1">
                            Info<Badge variant = 'info'>Value</Badge>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey = '1'>
                            <Card.Body>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Asset #</th>
                                        <th>Project</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                            </Table>
                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Toggle as = {Card.Header} eventKey = "2">
                            Success<Badge variant = 'success'>Value</Badge>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey = '2'>
                            <Card.Body>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Asset #</th>
                                        <th>Project</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                            </Table>
                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Toggle as = {Card.Header} eventKey = "3">
                            Progress<Badge variant = 'primary'>Value</Badge>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey = '3'>
                            <Card.Body>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Asset #</th>
                                        <th>Project</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                            </Table>
                            </Card.Body>
                        </Accordion.Collapse>
                </Accordion>
                <Card  style = {{textAlign : 'left'}}>
                    <h2><u>Recent Updates</u></h2>
                </Card>
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
        </div>
        )
    }
}

export default Home;
