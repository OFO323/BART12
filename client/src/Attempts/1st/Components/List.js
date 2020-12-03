import React, { Component, Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles.css';
import ARow from './AssetRow.js';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

const List = item => (
  <tr>
      <Link to = {{ pathname : `/Asset`, state :{
                              Department : [item.list.a_dept],   
                              Meter: [item.list.a_metername],
                              Asset : [item.list.a_projectid]
                            }}} >
      <td>{item.list.a_projectid}</td></Link>
      <td>{item.list.a_dept}</td>
      <td>{item.list.a_metername}</td>
      <td>{item.list.a_meterreading}</td>
      <td>{item.list.a_readdate}</td>
  </tr>
)

class Assets extends Component{
    constructor(props){
        super(props);
        this.state = {
            search: '',
            list : []
        }
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        this.getList();
    }
    onChange(event){
      this.setState({
          [event.target.name]: [event.target.value]
      })
  }

    AssetList(){
      return this.state.list.map (function(current, i){
          return <List list = {current} key = {i} />
      });
  }

    getList = () => {
        if(this.props.location.state){

          console.log(this.props.location.state)
          console.log("Fetching with paramenter")
          fetch(`http://localhost:4006/Assets/${this.props.location.state.assetID}`)
            .then(res =>res.json())
            .then(list => this.setState({list}))
        }
        else{
          console.log("Normal Entry")
          fetch('http://localhost:4006/Assets')
            .then(res =>res.json())
            .then(result => this.setState({list: result}))
        }
    }

    onClick(){
      fetch(`http://localhost:4006/Assets/${this.state.search}`)
              .then(res => res.json())
              .then(result => this.setState({list:result}))

  }

    render(){

        const {list} = this.state;

        //console.log(this.state);

        return (
          <Fragment>

            <Navbar bg="dark" variant="dark">
            <Form inline>
                <Nav.Link >
                    <Link to = {'/'} className = 'nav-link'>HOME</Link>
                </Nav.Link>
                <FormControl type="text" placeholder="Search Assets" className="mr-sm-2"/>
                <Button variant="outline-info">Search</Button>
            </Form>
            </Navbar>

          <Table className = "table table-striped" variant = 'dark'>
              <thead>
                  <tr class="text-primary">
                    <th>ProjectId</th>
                    <th>Department</th>
                    <th>Metername</th>
                    <th>Meter Reading</th>
                    <th>Reading Date</th>
                  </tr>
              </thead>
              <tbody>
                {this.AssetList()}

              </tbody>
          </Table>
            </Fragment>
          );

        }
            
}

export default Assets;