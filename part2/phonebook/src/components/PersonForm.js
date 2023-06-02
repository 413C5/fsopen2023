import React from "react";

const PersonForm= ({ addPerson, newName, handleNameChange }) => {
    return (
        <form onSubmit={addPerson}>
            <h2>Phonebook</h2>
            <div>
                name: <input value={newName} onChange={handleNameChange}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm