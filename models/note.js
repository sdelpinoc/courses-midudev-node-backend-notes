import mongoose from 'mongoose'

const { Schema, model } = mongoose

const NoteSchema = Schema({
  content: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  important: {
    type: Boolean,
    default: true
  }
})

// Mongoose by default it will add a 's' to the name of collection
// The initial letter must be capitalized
const User = model('Note', NoteSchema)

export default User
