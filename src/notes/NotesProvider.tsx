import React, { useEffect, useState } from 'react';
import { noop } from '../lib/function';
import { Note } from './note';
import { NoteContext } from './note-context';
import { NoteService } from './note-service';

type Props = {
  children: React.ReactNode
}

const NotesProvider = ({ children }: Props) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const fetch = () => NoteService.all().then(setNotes)
  const add = (note: Note) => NoteService.add(note).then(fetch)
  const remove = (note: Note) => NoteService.remove(note.id).then(fetch)

  useEffect(() => {
    fetch()
    return noop
  }, []);

  return <NoteContext.Provider value={{
    notes: [...notes],
    add,
    remove,
  }}>
    {children}
  </NoteContext.Provider>
}

export default NotesProvider;
