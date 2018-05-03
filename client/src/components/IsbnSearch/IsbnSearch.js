import React from "react";
import "./IsbnSearch.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const IsbnSearch = props => (
    <form className="search">
        <div className="form-group">
            <label htmlFor="isbn">Isbn:</label>
            <input
                value={props.search}
                onChange={props.handleInputChange}
                name="isbn"
                list="isbn"
                type="text"
                className="form-control"
                placeholder="Enter ISBN #"
                id="isbn"
            />
            <button
                type="submit"
                onClick={props.handleFormSubmit}
                className="btn btn-success"
            >
                Search
      </button>
        </div>
    </form>
);

export default IsbnSearch;