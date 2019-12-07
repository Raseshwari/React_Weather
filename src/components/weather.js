import React from 'react';
var moment = require('moment');

class Weather extends React.Component {
    constructor(props){
        super(props);
        this.getImageUrl = this.getImageUrl.bind(this)
    }

    getImageUrl(weather){
        return `http://openweathermap.org/img/w/${weather}.png`;
    }

    render() {
        let data = this.props.data;
        return (
            <div className="container">
                {Object.keys(data).map((val, index) => {
                    return (
                        <div className="row row-container" key={index}>
                            <div className="col-sm">
                                <div>
                                    {moment(data[index].dt_txt).format('YYYY ddd MMM DD')}
                                </div>
                                <div>
                                    <img className="weather-icon" src={this.getImageUrl(data[index].weather[0].icon)} />
                                </div>
                                <div>
                                    {data[index].weather[0].description}
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="center-div">
                                    <div className="float-outer">
                                        High: {data[index].main.temp_min}°F
                                    </div>
                                    <div className="float-inner">
                                        Low: {data[index].main.temp_max}°F
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm center-div">
                                Wind Speed: {data[index].wind.speed}mph
                            </div>
                            <div className="col-sm center-div">
                                Humidity: {data[index].main.humidity}%
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Weather;