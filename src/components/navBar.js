import React, { Fragment } from 'react';
import Form from './userForm';
import SearchBox from './searchBox';

class NavBarComponent extends React.Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-light bg-light">
                    <div>
                        <span className="navbar-brand mb-0 h1">Weather Forecast</span>
                    </div>
                    <div className="search">
                       <SearchBox 
                       bookmark = {this.props.bookmark}
                       handleBookmark = {this.props.handleBookmark}
                       updateBookmarkObj = {this.props.updateBookmarkObj}
                       />
                    </div>
                        <div>
                            <Form
                                bookmarkObj = {this.props.bookmarkObj}
                                handleChange={this.props.handleChange} 
                            />
                        </div>
                </nav>
            </Fragment>
                )
            }
        }
        
export default NavBarComponent;