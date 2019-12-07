import React from 'react';
import NavBarComponent from './components/navBar.js';
import Weather from './components/weather.js';
var moment = require('moment');

const Api_Key = "b7cc7d16f6a2279175df66665d9e2aef";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: '',
      imgUrl: '',
      bookmark: '',
      bookmarkObj: {},
      isCityInValid: false
    }
    this.getWeatherInfo = this.getWeatherInfo.bind(this);
    this.handleBookmark = this.handleBookmark.bind(this);
    this.updateBookmarkObj = this.updateBookmarkObj.bind(this);
    this.toggleCity = this.toggleCity.bind(this);
  }

  async getWeatherInfo(city) {
    let isCity = city.match(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/);

    if (isCity) {
      try {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${Api_Key}&units=imperial`);
        const response = await api_call.json();
        
        if(response.cod!=="200"){
          throw Error("error")
        }

        const data = response.list;
        console.log(data);

        let fiveDayData;
        if (data) {
          fiveDayData = data.filter(function (dataitem) {
            let temp = moment(dataitem.dt_txt).format('YYYY ddd MMM DD HH:mm A');
            let split = temp.split(' ');
            if (split[4] == '12:00') {
              return dataitem
            }
          })
          this.setState({
            data: fiveDayData
          })
        }

      } catch (e) {
        this.toggleCity();
      }
    }
  }

  toggleCity(){
    this.setState({
      isCityInValid: !this.state.isCityInValid
    })
  }

  componentDidMount() {
    this.setState({
      bookmarkObj: JSON.parse(localStorage.getItem("bookmark")),
    })
  }

  updateBookmarkObj() {
    this.setState({
      bookmarkObj: JSON.parse(localStorage.getItem("bookmark"))
    })
  }

  handleBookmark(value) {
    this.setState({
      bookmark: value
    })
  }

  render() {
    // this.formatData()
    console.log(this.state.isCityInValid)
    return (
      <div>
        <NavBarComponent
          handleChange={this.getWeatherInfo}
          bookmark={this.state.bookmark}
          handleBookmark={this.handleBookmark}
          updateBookmarkObj={this.updateBookmarkObj}
          bookmarkObj={this.state.bookmarkObj}
          isCityInValid={this.state.isCityInValid}
          toggleCity={this.toggleCity}
        />
        <Weather
          data={this.state.data}
        />
      </div>
    );
  }
}

export default App;
