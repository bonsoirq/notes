const { gql } = require('@apollo/server')

const schema = gql`
type Query {
  notes: [Note]
}

type Note {
  id: String
  content: String
  createdAt: String
}

type Mutation {
  addNote(id: String, content: String, createdAt: String): Note
  removeNote(id: String): Note
}
`
module.exports = schema
