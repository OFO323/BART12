import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
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
      <td>{item.list.a_meterunits}</td>
  </tr>
)

class Assets extends Component{
    constructor({match}){
        super(match)
        if(this.match){
            this.state = {
              search: match.params.Aid,
              list : []
          }
        }
        else{
            this.state = {
              search: '',
              list : []
          }
        }
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
        console.log(match)
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
      if(this.match){
        console.log("Using alternate route")
         fetch(`http://localhost:4006/Assets/${this.state.search}`)
          .then(res =>res.json())
          .then(result => this.setState({list: result}))
      }
      else{
        console.log("Using normal path")
        fetch('http://localhost:4006/Assets')
        .then(res =>res.json())
        .then(result => this.setState({list: result}))
        }

  }

      onClick(){
        fetch(`http://localhost:4006/Assets/${this.state.search}`)
        .then(res =>res.json())
        .then(result => this.setState({list: result}))
      }

    render(){

        const {list} = this.state;

        //console.log(this.state);

        return (
          <Fragment>
          <div class='bg-dark'>
          <Navbar bg="dark" variant="dark">
          <Form inline>
            <Nav.Link >
                    <Link to = {'/'} className = 'nav-link'>HOME</Link>
              </Nav.Link>

              <FormControl name = 'search' type="text" placeholder="Search Assets" className="mr-sm-2" value = {this.state.search} onChange = {this.onChange}/>
              <Button onClick = {this.onClick} variant="info">Search</Button>

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
                    <th>Meter Units</th>
                  </tr>
              </thead>
              <tbody>
                {this.AssetList()}
              </tbody>
          </Table>
          <Navbar class = "navbar fixed-bottom" expand = 'lg' sticky = 'bottom' bg = 'dark' width = '20px'>
                    <p></p>
            </Navbar>
          </div>
            </Fragment>
          );

        }
            
}

export default Assets;