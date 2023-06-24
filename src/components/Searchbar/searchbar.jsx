const { Component } = require('react');

class SearchBar extends Component {
  render() {
    return (
      <header
      // className="searchbar"
      >
        <form
          onSubmit={this.props.getData}
          // classNames="form"
        >
          <button
            type="submit"
            // classNamess="button"
          >
            <span
            // classNames="button-label"
            >
              Search
            </span>
          </button>

          <input
            // classNames="input"
            type="text"
            autoComplete="off"
            name="search"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default SearchBar;
