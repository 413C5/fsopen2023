import React, { useState, useEffect } from "react";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])
    const [newName, setNewName] = useState('')

    //handleAddPerson
    const addPerson = (event) => {
        event.preventDefault()

        const persons2 = [...persons]

        //Created person object
        const newPerson = {
            name: newName,
        }

        //adding new person

        setPersons(persons2.concat(newPerson))
        setNewName('')
    }

    const handleNameChange = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    return (
        <div>
            <PersonForm
                addPerson={addPerson}
                newName={newName}
                handleNameChange={handleNameChange}
            />
            <Persons persons={persons} />
        </div>
    )
}

export default App