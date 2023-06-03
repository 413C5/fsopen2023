import React from "react";
import Person from "./Person";

const Persons = ({ persons, handleDelete }) => {
    return (
        <div>
            {
                persons.map(person => {
                    return (
                        <Person key={person.name} person={person} handleDelete={handleDelete} />
                    )
                })
            }
        </div>
    )
}

export default Persons