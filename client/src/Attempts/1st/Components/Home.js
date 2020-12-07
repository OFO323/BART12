import React, { Component, Fragment } from 'react';
import {Link} from "react-router-dom";
import '../styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import BackgroundTrain from './backgroundTrain.png'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
//import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';

import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown'
import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import img from './backgroundTrain.png';

import NotifTable from './notifications';
import UpdateTable from './updateTable';

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
        <div style = {{backgroundColor: '#E7F7F7'}}>
            <Fragment>
            {/* <img src="/backgroundTrain.png" className="img-fluid" alt="TrainBg"></img>     */}
                <Navbar expand = 'lg' sticky = 'top' bg = 'dark' variant = 'dark'>
                    {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse> */}
                    <Nav className = 'ml-auto'>
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
                        <Dropdown class='ml-auto'>
                                <Dropdown.Toggle id="dropdown-custom-components" variant ="info">
                                Filter
                                </Dropdown.Toggle>
                                <Dropdown.Menu >
                                <Dropdown.Item ><Link to = {{pathname :`/Assets/${this.state.search}`}}>Assets</Link></Dropdown.Item>
                                <Dropdown.Item ><Link to = {`/workorders/${this.state.search}`}>Workorders</Link></Dropdown.Item>
                                <Dropdown.Item ><Link to = {''}> Projects</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <FormControl name = "search" type="text" placeholder="Search" className="mr-sm-2" onChange = {this.onChange} value = {this.state.search}/>
                        </Form>
                    </Nav>
                </Navbar>
                <Container fluid style ={{background:"#90a7a7"}} >
                        <Row fluid style= {{paddingTop:"0px"}}>
                            <Col md = {{span:8}} style= {{paddingLeft:"0px", paddingTop:"0px"}}>
                                <Image src = {img} style = {{maxWidth: "100%", height:"auto"}}/>
                            </Col>    
                            <Col md>
                                <Row>
                                    <h1 fluid style= {{paddingRight:"50px", paddingTop:"50px"}}><strong>Bay Area Rapid Transit</strong></h1>
                                </Row>
                                <Row>
                                    <div class = 'bg-gradient-secondary'>
                                    <h4 style= {{paddingRight:"50px"}}><small>Capital Project Managment Database</small></h4>
                                    </div>
                                </Row>  
                                <Row style = {{textAlign:"left", paddingRight:"50px"}}>
                                    <p>BART currently employs many different reports on crucial 
                                    information related to capital projects. Our app strives to 
                                    consolidate all useful reporting data into easy-to-use 
                                    business data analytics tools that notify the user of 
                                    important report updates, analyze asset data history, 
                                    and create new or edit current work orders.</p>
                                </Row>     
                            </Col>
                        </Row>
                </Container>
                <div class = "container">
                    <div class = "row">
                        <div class = 'col py-3'>
                        <Card style= {{textAlign : "left", border : '0', backgroundColor: '#E7F7F7'}}>
                            <h2 class = 'pb-3'><u>Notifications</u></h2>
                        </Card>
                        <div class = 'accordian-light table-light'>
                        <Accordion>  
                            <Accordion.Toggle as = {Card.Header} eventKey = "0"> Alert
                                {/* <Badge variant = 'danger'>Value</Badge> */}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey = '0'>
                                <Card.Body>
                                    <NotifTable type = 'alert'/>
                                </Card.Body>
                            </Accordion.Collapse>
                            {/* <Accordion.Toggle as = {Card.Header} eventKey = "1">
                                Info<Badge variant = 'info'>Value</Badge>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey = '1'>
                                <Card.Body>
                                    <NotifTable/>
                                </Card.Body>
                            </Accordion.Collapse> */}
                            <Accordion.Toggle as = {Card.Header} eventKey = "2"> Success
                                {/* <Badge variant = 'success'>Value</Badge> */}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey = '2'>
                                <Card.Body>
                                <Table striped bordered hover>
                                    <NotifTable type = 'success'/>
                                </Table>
                                </Card.Body>
                            </Accordion.Collapse>
                            <Accordion.Toggle as = {Card.Header} eventKey = "3"> Progress
                                {/* <Badge variant = 'primary'>Value</Badge> */}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey = '3'>
                                <Card.Body>
                                <Table striped bordered hover>
                                    <NotifTable type = "progress"/>
                                </Table>
                                </Card.Body>
                            </Accordion.Collapse>
                    </Accordion>
                    </div>
                    </div>
                    <div class = 'col pt-3 pb-4'>
                        <Card  style = {{textAlign : 'left', border : '0', backgroundColor: '#E7F7F7'}}>
                            <h2 class = 'pb-3'><u>Recent Updates</u></h2>
                        </Card>
                        <UpdateTable />
                        
                    </div>
                    </div>
                </div>
                <Navbar class = "navbar fixed-bottom" expand = 'lg' sticky = 'bottom' bg = 'dark' width = '20px'>
                    <p></p>
                </Navbar>
        </Fragment>
        </div>
        )
    }
}

export default Home;
