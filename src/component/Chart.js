import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto' 

function Chart(){

    const data={
        labels: ['colleges','University','School','Academy'],
        datasets:[  
          {
             label:"Education",
              data:[0,20,68,100],
              borderColor:['rgba(255,206,86,0.2)'],
              backgroundColor:['rgba(255,206,86,0.2)'],
              pointBackgroundColor:'rgba(255,206,86,0.2)',
              pointBorderColor:'rgba(255,206,86,0.2)'
          }  ,
         
          {
           label:"Healthcare",
            data:[0,27,0,29,88],
            borderColor:['rgba(0, 140, 125, 1)'],
            backgroundColor:['rgba(0, 140, 125, 1)'],
            pointBackgroundColor:'rgba(0, 140, 125, 1)',
            pointBorderColor:'rgba(0, 140, 125, 1)'
        }  ,
        {
            label:"Transport" , 
            data:[0,17,46,26,80],
            borderColor:['rgba(85, 140, 255, 1)'],
              backgroundColor:['rgba(85, 140, 255, 1)'],
              pointBackgroundColor:'rgba(85, 140, 255, 1)',
              pointBorderColor:'rgba(85, 140, 255, 1)'
        }  ,
        {
            label:"Population",
            data:[0,32,78,65],
            borderColor:['rgba(254, 190, 255, 1)'],
              backgroundColor:['rgba(254, 190, 255, 1)'],
              pointBackgroundColor:'rgba(254, 190, 255, 1)',
              pointBorderColor:'rgba(254, 190, 255, 1)'
        } , 
    
    
        ]
    }
    const options={
        title:{
            display:true,
            text:'Line Chart'
        },
        scales:{
            yAxes:[
                {
                    ticks:{
                        min:0,
                        max:100,
                        stepSize:10
                    }
                }
            ]
        }
    }
        return (
            <Line data= {data} options={options}/>  
        )
    }
    export default Chart;