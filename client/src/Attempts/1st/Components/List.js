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
//import Col from 'react-bootstrap/Col';

class Assets extends Component{
    constructor(props){
        super(props);
        this.state = {
            list : []
        }
    }

    componentDidMount(){
        this.getList();
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
              <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
              <p style = {{color:"grey", margin:1}}>Search Assets</p>
              </Form.Label>
              <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
              <Button variant="outline-info">Search</Button>
          </Form>
          </Navbar>
          <Table variant = 'dark'>
              <thead>
                  <tr>
                    <th>ProjectId</th>
                    <th>Department</th>
                    <th>Metername</th>
                    <th>Meter Reading</th>
                    <th>Reading Date</th>
                  </tr>
              </thead>
              <tbody>
                {list.length ? (
<<<<<<< HEAD
                  <div>
                    {list.map ((item)=> {
                      return (
                        <tr>
                          <Link to = {{ pathname : `/Asset`, state :{
                            Meter: [item.a_metername],
                            Asset : [item.a_projectid],
                            Department: [item.a_dept],
                          }}} > <ARow projectId = {item.a_projectid} dept = {item.a_dept} meterName = {item.a_metername} reading = {item.a_meterreading} date = {item.a_readdate} /> </Link>
                        </tr>
                      )
                    })}
                  </div>
                ):(<div>
                  Loading...
                </div>) }
                </table>
              </table>              
            </div>
=======
                    <div>
                      {list.map ((item)=> {
                        return (
                          <tr>
                            <Link to = {{ pathname : `/Asset`, state :{
                              Days : [item.a_readdate],   
                              Meter: [item.a_meterreading],
                              Asset : [item.a_projectid]
                            }}} > <ARow projectId = {item.a_projectid} dept = {item.a_dept} meterName = {item.a_metername} reading = {item.a_meterreading} date = {item.a_readdate} /> </Link>
                          </tr>
                        )
                      })}
                    </div>
                  ):(<div>
                    Loading...
                  </div>) }
              </tbody>
          </Table>
            </Fragment>
>>>>>>> a6677dc7241fc2e040e5575aa29d6de2a2517b20
          );

        }
            
}

export default Assets;
