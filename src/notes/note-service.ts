import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { noop } from '../lib/function';
import { Note } from './note';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})

type NoteObject = {
  id: string,
  content: string,
  createdAt: string,
}
export const NoteService = {
  all(): Promise<Note[]> {
    return client.query({
      query: gql`
        query GetNotes {
          notes {
            id, content, createdAt
          }
        }
      `,
      fetchPolicy: 'network-only',
    })
      .then(({ data }) => data.notes)
      .then(notes => notes.map((x: NoteObject) => ({
        id: x.id,
        content: x.content,
        createdAt: new Date(Date.parse(x.createdAt)),
      })) as Note[]);
  },

  add(note: Note): Promise<void> {
    return client.mutate({
      mutation: gql`
        mutation AddNote($id: String!, $content: String!, $createdAt: String!) {
          addNote(id: $id, content: $content, createdAt: $createdAt) {
            id
            content
            createdAt
          }
        }
      `,
      variables: {
        id: note.id,
        content: note.content,
        createdAt: note.createdAt.toISOString(),
      },
    }).then(noop)
  },

  remove(id: string): Promise<void> {
    return client.mutate({
      mutation: gql`
        mutation RemoveNote($id: String!) {
          removeNote(id: $id) {
            id
          }
        }
      `,
      variables: {
        id,
      },
    }).then(noop)
  },
}
