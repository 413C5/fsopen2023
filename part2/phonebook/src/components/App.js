import React, { useState, useEffect } from "react";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Filter from "./Filter";

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    //Cleans inputs
    const resetFields = () => {
        setNewName('')
        setNewNumber('')
    }

    //handleAddPerson
    const addPerson = (event) => {
        event.preventDefault()

        //finds if person exist in array
        if (persons.find(person => person.name.toLowerCase() === newName.toLowerCase()))
            alert(`${newName} is already added to phonebook`)

        //Successfully added person
        else {
            const persons2 = [...persons]

            //Created person object
            const newPerson = {
                name: newName,
                number: newNumber,
            }

            //adding new person

            setPersons(persons2.concat(newPerson))
            resetFields()
        }
    }

    const handleNameChange = (event) => {
        event.preventDefault()
        //console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        event.preventDefault()
        //console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        event.preventDefault()
        //console.log(event.target.value)
        setFilter(event.target.value)
    }

    const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} handleFilterChange={handleFilterChange} />
            <h3>Add a new</h3>
            <PersonForm
                addPerson={addPerson}
                newName={newName}
                handleNameChange={handleNameChange}
                newNumber={newNumber}
                handleNumberChange={handleNumberChange}
            />
            <h3>Numbers</h3>
            <Persons persons={filteredPersons} />
        </div>
    )
}

export default App