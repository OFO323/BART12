import React, { Component } from 'react';
import Charts from './GraphContainer.js'

class Asset extends Component{
    constructor(props){
        super(props)
        this.state = {
            Asset: props.location.state.Asset,
            Dates: [props.location.state.Days],
            Readings: [props.location.state.Meter]
        }
        console.log(props.location.state.Dates)
    }

    render() {
        return (
             <div>
                 {this.state.Readings}
                 <div>
                     <Charts ReadDate = {this.state.Dates} Reading = {this.state.Readings} asset = {this.state.Asset} />
                 </div>
             </div>
        );
    }
}
export default Asset;