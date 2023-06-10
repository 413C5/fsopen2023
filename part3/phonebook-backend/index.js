const express = require('express')
const app = express()
app.use(express.json())

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    let size = (persons.length).toString()
    console.log(size)

    const date = new Date()
    const today = date.toDateString()
    const time = date.toTimeString()

    console.log('Date:', today)
    console.log('Time:', time)

    response.send(
        `Phonebook has info for ${size} people` +
        `</br> </br>${today} ${time}`)
})

app.get('/api/persons/:id', (request, response) => {
    //Converts string id into number
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    console.log(person)

    if (person) {
        response.json(person)
    }
    else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    let size = persons.length

    console.log('array:', persons)
    console.log('length', persons.length)

    //Deletion of person with id
    persons = persons.filter(person => person.id !== id)

    //Error prevention
    //size>length means operation was successful
    if (size > persons.length)
        response.status(204).end()
    else
        response.status(404).end()

    console.log('array:', persons)
    console.log('length', persons.length)
})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})