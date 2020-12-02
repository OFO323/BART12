import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import ARow from './AssetRow.js';

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
    }

    componentDidMount(){
        this.getList();
    }

    AssetList(){
      return this.state.list.map (function(current, i){
          return <List list = {current} key = {i} />
      });
  }

    getList = () => {
        fetch('http://localhost:4006/Assets')
          .then(res =>res.json())
          .then(list => this.setState({list}))

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
                {/* {list.length ? (
                    <div>
                      {list.map ((item)=> {
                        return (
                          <tr>
                            <Link to = {{ pathname : `/Asset`, state :{
                              Department : [item.a_dept],   
                              Meter: [item.a_metername],
                              Asset : [item.a_projectid]
                            }}} > <ARow projectId = {item.a_projectid} dept = {item.a_dept} meterName = {item.a_metername} reading = {item.a_meterreading} date = {item.a_readdate} /> </Link>
                          </tr>
                        )
                      })}
                    </div>
                  ):(<div>
                    Loading...
                  </div>) } */}
              </tbody>
          </Table>
            </Fragment>
          );

        }
            
}

export default Assets;