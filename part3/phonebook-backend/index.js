const express = require('express')
const app = express()
const morgan = require('morgan')
app.use(morgan('tiny'))

morgan.token('object', function (request, require) {
    return `${JSON.stringify(request.body)}`
})

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

const generateRandomId = () => {
    return Math.floor(Math.random() * (1000 - 1) + 1)
}

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    let size = (persons.length).toString()
    //console.log(size)

    const date = new Date()
    const today = date.toDateString()
    const time = date.toTimeString()

    //console.log('Date:', today)
    //console.log('Time:', time)

    response.send(
        `Phonebook has info for ${size} people` +
        `</br> </br>${today} ${time}`)
})

app.get('/api/persons/:id', (request, response) => {
    //Converts string id into number
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    //console.log(person)

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

    //console.log('array:', persons)
    //console.log('length', persons.length)

    //Deletion of person with id
    persons = persons.filter(person => person.id !== id)

    //Error prevention
    //size>length means operation was successful
    if (size > persons.length)
        response.status(204).end()
    else
        response.status(404).end()

    //console.log('array:', persons)
    //console.log('length', persons.length)
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    const findPerson = persons.find(x => x.name === body.name)

    //console.log('array:', persons)
    //console.log('length', persons.length)


    //Name or number is missing
    if (!body.name && !body.number) {
        return response.status(400).json({
            error: 'name or number is missing'
        })
    }

    else if (!body.name) {
        return response.status(400).json({
            error: 'name is missing'
        })
    }

    else if (!body.number) {
        return response.status(400).json({
            error: 'number is missing'
        })
    }

    else {
        //Undefined means there is no name duplicate
        if (findPerson !== undefined) {
            return response.status(400).json({
                error: 'name must be unique'
            })
        }

        const newPerson = {
            id: generateRandomId(),
            name: body.name,
            number: body.number
        }

        persons = persons.concat(newPerson)
        response.json(newPerson)

        //console.log('array:', persons)
        //console.log('length', persons.length)
    }
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})