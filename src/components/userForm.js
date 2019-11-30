import React from 'react';
import Weather from './weather.js';
var cities = require('./cities.json')

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            city: e.target.value
        });
    }

    render() {
        return (
            <section className="container">
                <div className="select-menu-right">
                    <select className="form-control" name="type" id="city" onChange={this.handleChange}>
                        <option key='first' value='default'>Select City</option>
                        {
                            Object.keys(cities).map(function (key) {
                                return <option key={key} value={cities[key].name}>{cities[key].name}</option>
                            })
                        }
                    </select>
                    <Weather city={this.state.city} />
                </div>
            </section>
        )
    }
}

export default Form;