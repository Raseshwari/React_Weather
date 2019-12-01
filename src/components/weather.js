import React from 'react';
var moment = require('moment');

class Weather extends React.Component {
    render() {
        let data = this.props.data;
        return (
            <div className="container">
                {Object.keys(data).map((val, index) => {
                    return (
                        <div className="row jumbotron" key={index}>
                            <div className="col-sm">
                                <div>
                                    {moment.unix(data[index].dt).format('dddd, MMMM D')}
                                </div>
                                <div>
                                    Temperature {data[index].main.temp}
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="float-outer">
                                    High: {data[index].main.temp_min}
                                </div>
                                <div className="float-inner">
                                    Low: {data[index].main.temp_max}
                                </div>
                            </div>
                            <div className="col-sm">
                                Wind Speed: {data[index].wind.speed}
                            </div>
                            <div className="col-sm">
                                Humidity: {data[index].main.humidity}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Weather;