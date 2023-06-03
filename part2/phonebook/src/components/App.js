import React, { useState, useEffect } from "react";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Filter from "./Filter";
import personsService from "../services/persons";

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    //Cleans inputs
    const resetFields = () => {
        setNewName('')
        setNewNumber('')
    }

    //Recover data
    useEffect(() => {
        personsService
            .getAll()
            .then(response => {
                setPersons(response)
            })
    }, [])

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
            personsService
                .create(newPerson)
                .then(response => {
                    setPersons(persons2.concat(response))
                    resetFields()
                })
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