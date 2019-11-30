import React from 'react';
var cities = require('./cities.json')

class Form extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <section className="container">
                <div className="select-menu-right">
                    <select className="form-control" name="type" id="city">
                        <option key='first' value='default'>Select City</option>
                        {
                            Object.keys(cities).map(function(key){
                                return <option key={key} value={cities[key].name}>{cities[key].name}</option>
                            })
                        }
                    </select>
                </div>
            </section>
        )
    }
}

export default Form;