let notes = []

const resolvers = {
  Query: {
    notes: () => notes
  },
  Mutation: {
    addNote: (_, note) => { notes = [note, ...notes] },
    removeNote: (_, { id }) => { notes = notes.filter(x => x.id !== id) },
  }
}

module.exports = resolvers
