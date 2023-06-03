import React from "react";

const Person = ({ person, handleDelete }) => {

    const deletePerson=()=>{
        return(
            handleDelete(person.id)
        )
    }
    return (
        <p>{person.name} {person.number} <button onClick={deletePerson}>delete</button></p>
    )
}

export default Person