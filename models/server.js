import express from 'express'
import cors from 'cors'
import { dbConnection } from '../database/config.js'

// import logger from '../middlewares/logger.js'

let notes = [
  {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
  },
  {
    userId: 1,
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'
  }
]

export default class Server {
  constructor () {
    this.port = process.env.PORT || 3000

    this.app = express()

    this.middlewares()

    this.routes()

    // Connect DB
    this.connectDB()
  }

  middlewares () {
    this.app.use(cors())

    this.app.use(express.json())

    // this.app.use(logger)
  }

  routes () {
    this.app.get('/', (request, response) => {
      response.send('<h1>Hello world!</h1>')
    })

    this.app.get('/api/notes', (request, response) => {
      response.json(notes)
    })

    this.app.get('/api/notes/:id', (request, response) => {
      const { id } = request.params

      const note = notes.find(note => note.id === Number(id))

      if (note) {
        response.json(note)
      } else {
        response.status(404).send('Note not found')
      }
    })

    this.app.delete('/api/notes/:id', (request, response) => {
      const { id } = request.params

      notes = notes.filter(note => note.id !== Number(id))

      if (notes) {
        response.json(notes)
      }
    })

    this.app.post('/api/notes', (request, response) => {
      const note = request.body
      console.log({ note })
      if (!note || !note.content) {
        return response.status(400).json({
          error: 'Invalid request'
        })
      }

      const ids = notes.map(note => note.id)
      // console.log({ ids })
      const maxId = Math.max(...ids)
      // console.log({ maxId })

      const newNote = {
        id: maxId + 1,
        ...note
      }

      notes = [...notes, newNote]

      response.status(201).json(newNote)
    })

    this.app.use((request, response) => {
      response.status(404).json({
        error: 'Page not found'
      })
    })
  }

  connectDB () {
    dbConnection()
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`Server running in port ${this.port}`)
    })
  }
}
