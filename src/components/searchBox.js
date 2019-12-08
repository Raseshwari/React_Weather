import React from 'react';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            value: ''
        }
        this.textInput = React.createRef();
        this.handleBookmark = this.handleBookmark.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    handleBookmark() {
        let bookmarks = JSON.parse(localStorage.getItem("bookmark")) || {};
        let bookmark = this.textInput.current.value;
        let isValidBookmark = bookmark.match(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/);

        if (isValidBookmark) {
            // add bookmark value if not present already
            if (Object.values(bookmarks).indexOf(bookmark) === -1) {
                let key = Object.keys(bookmarks).length + 1;
                bookmarks[key] = bookmark;
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
            this.props.handleChange(this.state.input);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ value: this.textInput.current.value})
        this.props.handleChange(this.textInput.current.value);
      };
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <input type="text" className="form-control py-2 border-right-0 border" ref={this.textInput} />
                        <span className="input-group-append">
                            <button className="btn btn-outline-secondary border-left-0 border">Search</button>
                            <button className="btn btn-outline-secondary border-left-0 border" type="submit" onClick={this.handleBookmark}>
                                <i className="fa fa-bookmark"></i>
                            </button>
                        </span>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBox;