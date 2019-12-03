import React from 'react';
var moment = require('moment');

class Weather extends React.Component {
    constructor(props){
        super(props);
        this.getImageUrl = this.getImageUrl.bind(this)
    }

    getImageUrl(weather){
        let imgUrl = '';
        switch (weather) {
          case "Snow":
            imgUrl = '/img/snow.png'
            break;
          case "Clouds":
            imgUrl = '/img/clouds.png'
            break;
          case "Clear":
            imgUrl = '/img/sunny.png'
            break;
          case "Rain":
            imgUrl = "/img/rains.png";
            break;
        }
        return imgUrl;
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
                                    {moment(data[index].dt_txt).format('dddd, MMMM D')}
                                </div>
                                <div>
                                    <img className="weather-icon" src={this.getImageUrl(data[index].weather[0].main)} />
                                </div>
                                <div>
                                    {data[index].weather[0].description}
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="center-div">
                                    <div className="float-outer">
                                        High: {data[index].main.temp_min}
                                    </div>
                                    <div className="float-inner">
                                        Low: {data[index].main.temp_max}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm center-div">
                                Wind Speed: {data[index].wind.speed}
                            </div>
                            <div className="col-sm center-div">
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