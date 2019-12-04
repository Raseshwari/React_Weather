import React from 'react';
import NavBarComponent from './components/navBar.js';
import Weather from './components/weather.js';
const Api_Key = "b7cc7d16f6a2279175df66665d9e2aef";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: '',
      imgUrl: '',
      bookmark: '',
      bookmarkObj : {}
    }
    this.getWeatherInfo = this.getWeatherInfo.bind(this);
    this.handleBookmark = this.handleBookmark.bind(this);
    this.updateBookmarkObj = this.updateBookmarkObj.bind(this);
  }

  async getWeatherInfo(city) {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${Api_Key}&units=imperial`);
    const response = await api_call.json();
    const data = response.list;
    console.log(data);

    this.setState({
      data
    })
  }

  componentWillMount(){
    this.setState({
      bookmarkObj: JSON.parse(localStorage.getItem("bookmark"))
    })
  }

  updateBookmarkObj(){
    this.setState({
      bookmarkObj: JSON.parse(localStorage.getItem("bookmark"))
    })
  }
  
  handleBookmark(value){
    this.setState({
      bookmark : value
    })
  }

  render() {
    return (
      <div>
        <NavBarComponent
          handleChange={this.getWeatherInfo} 
          bookmark = {this.state.bookmark}
          handleBookmark = {this.handleBookmark}
          updateBookmarkObj = {this.updateBookmarkObj}
          bookmarkObj = {this.state.bookmarkObj}
          />
        <Weather
          data={this.state.data}
        />
      </div>
    );
  }
}

export default App;
