import React, { Component } from 'react';
import Charts from './GraphContainer.js'

class Asset extends Component{
    constructor(props){
        super(props)
        this.state = {
            Asset: props.location.state.Asset,
            Dept: props.location.state.Department,
            Meter: props.location.state.Meter
        }
        console.log(props)

    }

    render() {
        return (
             <div>
                 <div>
                     <Charts asset = {this.state.Asset} dept = {this.state.Dept} meter = {this.state.Meter}/>
                 </div>
             </div>
        );
    }
}
export default Asset;