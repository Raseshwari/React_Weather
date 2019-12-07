import React, { Fragment } from 'react';
import Form from './userForm';
import SearchBox from './searchBox';

class NavBarComponent extends React.Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-light bg-light navCustom">
                    <div>
                        <span className="navbar-brand mb-0 h1">Weather Forecast</span>
                    </div>
                    {
                        this.props.isCityInValid ? <div><p>Invalid City</p></div> : <div></div>
                    }
                    <div className="search">
                        <SearchBox
                            bookmark={this.props.bookmark}
                            handleBookmark={this.props.handleBookmark}
                            updateBookmarkObj={this.props.updateBookmarkObj}
                            handleChange={this.props.handleChange}
                            isCityInValid={this.props.isCityInValid}
                            toggleCity={this.props.toggleCity}
                        />
                    </div>
                    <div>
                        <Form
                            bookmarkObj={this.props.bookmarkObj}
                            handleChange={this.props.handleChange}
                        />
                    </div>
                </nav>
            </Fragment>
        )
    }
}

export default NavBarComponent;