import React, { useContext } from 'react';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { Note } from './note';
import { NoteContext } from './note-context';
import NoteDetails from './NoteDetails';

type Props = RouteComponentProps<{ id: string }>

const NoteContainer = ({ match , history}: Props) => {
  const { notes, remove } = useContext(NoteContext);

  const note = notes.find(x => x.id === match.params.id)

  if (note == null) {
    return <Redirect to="/" />
  }

  const handleBack = () => {
    history.goBack()
  }

  const handleDelete = (note: Note) => {
    if (window.confirm('Are you sure?')) {
      remove(note)
      history.push('/')
    }
  }

  return <NoteDetails
    note={note}
    onBack={handleBack}
    onDelete={handleDelete}
  />
}

export default withRouter(NoteContainer);
