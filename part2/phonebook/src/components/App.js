import React, { useState, useEffect } from "react";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Filter from "./Filter";
import personsService from "../services/persons";
import Notification from "./Notification"

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [state, setState] = useState(false)
    const [message, setMessage] = useState(null)

    //Cleans inputs
    const resetFields = () => {
        setNewName('')
        setNewNumber('')
    }

    //Sets message and color
    const showMessage = (message, state) => {
        setMessage(message)
        console.log(message)
        setState(state)
        setTimeout(() => {
            setMessage(null)
            setState(false)
        }, 5000)
    }

    //Recover data from db.json
    useEffect(() => {
        personsService
            .getAll()
            .then(response => {
                setPersons(response)
            })
            .catch(error => {
                showMessage(`Something went wrong: ${error}`, false)
            })

    }, [])

    //handleAddPerson
    const addPerson = (event) => {
        event.preventDefault()

        //Get id of specific object
        const person = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())

        //updatedObject
        const person2 = { ...person, number: newNumber }

        //Updating person number if existing
        //finds if person exist in array
        if (persons.find(person => person.name.toLowerCase() === newName.toLowerCase())) {
            if (window.confirm(`${newName} is already added to phonebook,replace the old number with a new one?`)) {

                //console.log(person)
                //console.log(person2)

                personsService
                    .update(person.id, person2)
                    .then(response => {

                        //Object of array is updated if id is found
                        setPersons(
                            persons.map(x => {
                                if (x.id === person.id)
                                    return response
                                else
                                    return x
                            })
                        )
                        showMessage(`Updated ${person.name} with number ${newNumber}`, true)
                        resetFields()
                    })
                    .catch(error => {
                        showMessage(`Error updating ${person.name}. That contact was recently deleted`, false)
                        //console.log(error)
                        setPersons(persons.filter(x => x.id !== person.id))
                    })
            }
        }

        //Adding person
        else {
            const persons2 = [...persons]

            //Created person object
            const newPerson = {
                name: newName,
                number: newNumber,
            }

            //Adding new person
            personsService
                .create(newPerson)
                .then(response => {
                    setPersons(persons2.concat(response))
                    showMessage(`Added ${newName}`, true)
                    resetFields()
                })
                .catch(error => {
                    showMessage(`Error adding contact`, false)
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

    const handleDelete = (id) => {
        const findPerson = persons.find(person => person.id === id)
        const persons2 = persons.filter(person => person.id !== id)
        //console.log(persons2)

        if (window.confirm(`Delete ${findPerson.name}`)) {
            //console.log('delete of ', id)

            personsService
                .remove(id)
                .then(response => {
                    setPersons(persons2)
                    showMessage(`Deleted ${findPerson.name}`, true)

                })
                .catch(error => {
                    showMessage(`Information of ${findPerson.name} has already been removed from server`, false)
                    setPersons(persons.filter(x => x.id !== id))
                })
        }

    }

    const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={message} state={state} />
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
            <Persons persons={filteredPersons} handleDelete={handleDelete} />
        </div>
    )
}

export default App