import React, { Component, useEffect } from 'react';
import CanvasJSReact, { CanvasJSChart } from 'canvasjs-react-charts';
import axios from 'axios'

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        this.getData()
    }

    getData(){
        // console.log("THE");
        const asset = 'A65';
        fetch(`http://localhost:4006/Assets/${asset}`)
        .then(res => res.json())
        .catch(err => console.log(err))

        
    }

    render(){
        var {data} = this.state;
        console.log(data.y);

        const options = () => {
            const asset = 'A65';
            let date = [];
            let readings = [];
            axios.get(`http://localhost:4006/Assets/${asset}`)
            .then(res => JSON.stringify(res))
            .then(data =>{
                for(const dataObj of data.data.data){
                    date.push(dataObj.a_readdate)
                    data.push(parseInt(dataObj.a_meterreading))
                }

                setChartData({
                    labels : date,
                    datasets:[
                        {
                            label: "Meter Readings",
                            data: readings,
                        }
                    ]
                });
            })
        .catch(err=>{
            console.log(err)
        });
        console.log(date, readings)
        };
        
        useEffect(()=>{
            Chart();
        }, []);

        return (
            <div>
                 <CanvasJSChart options = {options} />
            </div>
        )
    }
    
}

export default Chart;