import React, { Component } from 'react';
import '../styles.css';
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
                          <td>{item.a_projectid}</td>
                          <td>{item.a_dept} </td>
                          <td>{item.a_metername} </td>
                          <td>{item.a_meterdesc} </td>
                          <td>{item.a_meterreading} </td>
                          <td>{item.a_readdate} </td>
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