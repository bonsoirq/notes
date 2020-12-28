import React, { useState } from 'react';
import { Note } from './note';
import { NoteContext } from './note-context';

type Props = {
  children: React.ReactNode
}

const NotesProvider = ({ children }: Props) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const add = (note: Note) => setNotes([note, ...notes])
  const remove = (note: Note) => setNotes(notes.filter(x => x.id !== note.id))

  return <NoteContext.Provider value={{
    notes: [...notes],
    add,
    remove,
  }}>
    {children}
  </NoteContext.Provider>
}

export default NotesProvider;
