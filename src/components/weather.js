import React from 'react';
const Api_Key = "b7cc7d16f6a2279175df66665d9e2aef";


class Weather extends React.Component{
    constructor(props){
        super(props);

    }

    async componentDidUpdate(){
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.props.city}&appid=${Api_Key}&cnt=5`);
        const response = await api_call.json();
        console.log(response);
    }

    render(){
        return(
            <div></div>
        )
    }
}

export default Weather;