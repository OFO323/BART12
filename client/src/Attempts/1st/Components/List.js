import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import ARow from './AssetRow.js'
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
            <div >
              <h1 >List of Items</h1>
              <table>
                <table className = 'listTitle'>
                <tr>
                    <th>ProjectId</th>
                    <th>Department</th>
                    <th>Metername</th>
                    <th>Meter Description</th>
                    <th>Meter Reading</th>
                    <th>Reading Date</th>
                </tr>
                </table>
                <table className = 'listContent'>
                {list.length ? (
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
          );

        }
            
}

export default Assets;