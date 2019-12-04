import React from 'react';
var cities = require('./cities.json')

class Form extends React.Component {
    render() {
        let bookmarked = this.props.bookmarkObj
        console.log(this.props.bookmarkObj)
        return (
            <section className="container">
                <div className="select-menu-right">
                    <select className="form-control" name="type" id="city" onChange={(e)=>this.props.handleChange(e.target.value)}>
                        <option key='first' value='default'>Select City</option>
                        {
                            bookmarked ? Object.keys(bookmarked).map(function (key) {
                                return <option key={key} value={bookmarked[key]}>{bookmarked[key]}</option>
                            }):''
                        }
                        {
                            Object.keys(cities).map(function (key) {
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