import React from 'react';
import NavBarComponent from './components/navBar.js';
import Weather from './components/weather.js';
const Api_Key = "b7cc7d16f6a2279175df66665d9e2aef";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: '',
    }
    this.getWeatherInfo = this.getWeatherInfo.bind(this);
  }

  async getWeatherInfo(e) {

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${e.target.value}&appid=${Api_Key}&cnt=5`);
    const response = await api_call.json();
    const data = response.list;
    this.setState({
      data: data
    })
  }

  render() {
    return (
      <div>
        <NavBarComponent
          handleChange={this.getWeatherInfo} />
        <Weather 
        data = {this.state.data}
        />
      </div>
    );
  }
}

export default App;
