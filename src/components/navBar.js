import React, { Fragment } from 'react';
import Form from './userForm'

class NavBarComponent extends React.Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-light bg-light">
                    <div>
                        <span className="navbar-brand mb-0 h1">Weather Forecast</span>
                    </div>
                    <div>
                        <Form 
                        handleChange = {this.props.handleChange}/>
                    </div>
                </nav>
            </Fragment>
        )
    }
}

export default NavBarComponent;