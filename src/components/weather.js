import React from 'react';
class Weather extends React.Component{
    render(){
        let data = this.props.data;
        return(
            <div className="container">
               {Object.keys(data).map((val, index)=>{
                   return(
                       <div className="row jumbotron" key={index}>
                           <div className="col-sm">
                               Temperature {data[index].main.temp}
                            </div>
                            <div className="col-sm">
                               Min Temperature {data[index].main.temp_min}
                            </div>
                            <div className="col-sm">
                               Max Temperature {data[index].main.temp_max}
                            </div>
                       </div>
                   )
               })}
            </div>
        )
    }
}

export default Weather;