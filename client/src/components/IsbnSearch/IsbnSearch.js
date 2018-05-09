import React from "react";
import "./IsbnSearch.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const IsbnSearch = props => (
   
    <div className="input-group mb-3">
        <label htmlFor="isbn" className="sr-only">Isbn:</label>
            <input
                value={props.search}
                onChange={props.handleInputChange}
                name="isbn"
                list="isbn"
                type="text"
                className="form-control inputStyle"
                placeholder="Enter Book Title or ISBN Number"
                id="isbn"
                            />
        <div className="input-group-append">
            <button
                type="submit"
                onClick={props.handleFormSubmit}
                className="btn login btn-sm btn-primary"
                id="searchBtn"
            >
                Search
            </button>
        </div>
    </div>
    
    
);

export default IsbnSearch;