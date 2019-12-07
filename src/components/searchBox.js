import React from 'react';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
        this.handleBookmark = this.handleBookmark.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    handleBookmark() {
        let bookmarks = JSON.parse(localStorage.getItem("bookmark")) || {};
        let bookmark = this.props.bookmark;
        let isValidBookmark = bookmark.match(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/);

        if (isValidBookmark) {
            // add bookmark value if not present already
            if (Object.values(bookmarks).indexOf(bookmark) === -1) {
                let key = Object.keys(bookmarks).length + 1;
                bookmarks[key] = this.props.bookmark;
                localStorage.setItem("bookmark", JSON.stringify(bookmarks))
                this.props.updateBookmarkObj()
            }
        }
    }

    handleInputChange(e) {
        this.setState({
            input: e.target.value
        })
        this.props.handleBookmark(e.target.value)
    }

    handleSearchSubmit() {
        if(this.props.isCityInValid){
            this.props.toggleCity();
        }
        this.props.handleChange(this.state.input);
    }

    render() {
        return (
            <div className="input-group">
                <input className="form-control py-2 border-right-0 border" type="search" id="example-search-input" onChange={this.handleInputChange} />
                <span className="input-group-append">
                    <button className="btn btn-outline-secondary border-left-0 border" type="submit" onClick={this.handleSearchSubmit}>
                        <i className="fa fa-search"></i>
                    </button>
                    <button className="btn btn-outline-secondary border-left-0 border" type="submit" onClick={this.handleBookmark}>
                        <i className="fa fa-bookmark"></i>
                    </button>
                </span>
            </div>
        )
    }
}

export default SearchBox;