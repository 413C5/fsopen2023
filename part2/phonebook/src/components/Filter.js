import React from "react";

const Filter = ({ filter, handleFilterChange }) => {
    return (
        <div>
            <h2>Phonebook</h2>
            filter shown with:<input value={filter} onChange={handleFilterChange} />
        </div>
    )
}

export default Filter