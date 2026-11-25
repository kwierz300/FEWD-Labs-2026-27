const SearchBar = ({ filterText, onFilterTextChange, showUnavailable, onShowUnavailableChange }) => {
    return (
        <form className="mb-3" onSubmit={event => event.preventDefault()}>
            <label htmlFor="menu-search" className="form-label">Search menu</label>
            <input
                id="menu-search"
                className="form-control"
                type="text"
                value={filterText}
                placeholder="Search..."
                onChange={event => onFilterTextChange(event.target.value)}
            />
            <div className="form-check mt-2">
                <input
                    id="show-unavailable"
                    className="form-check-input"
                    type="checkbox"
                    checked={showUnavailable}
                    onChange={event => onShowUnavailableChange(event.target.checked)}
                />
                <label className="form-check-label" htmlFor="show-unavailable">
                    Show unavailable items
                </label>
            </div>
        </form>
    );
};

export default SearchBar;
