import React from 'react';

class SearchBox extends React.Component {
    constructor(props){
        super(props);
        this.handleBookmark = this.handleBookmark.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleBookmark(){
        let bookmarks = JSON.parse(localStorage.getItem("bookmark")) || {};
        let bookmark = this.props.bookmark;

        // add bookmark value if not present already
        if(Object.values(bookmarks).indexOf(bookmark) === -1){
            let key = Object.keys(bookmarks).length + 1;
            bookmarks[key] = this.props.bookmark;
            localStorage.setItem("bookmark", JSON.stringify(bookmarks))
            this.props.updateBookmarkObj()
        }
    }

    handleInputChange(e){
        this.props.handleBookmark(e.target.value)
    }

    render() {
        return (
            <div className="input-group">
            <input className="form-control py-2 border-right-0 border" type="search" id="example-search-input" onChange={this.handleInputChange}/>
            <span className="input-group-append">
                <button className="btn btn-outline-secondary border-left-0 border" type="button">
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