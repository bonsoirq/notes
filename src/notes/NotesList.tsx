import React, { useContext } from 'react';
import { Note } from './note';
import { NoteContext } from './note-context';

const NotesList = () => {
  const { notes, remove } = useContext(NoteContext);
  return (
    <div>
      {notes.map(x => <NoteEntry note={x} onDelete={() => {
        if (window.confirm('Are you sure?')) {
          remove(x)
        }
      }} />)}
    </div>
  );
}

type Props = {
  note: Note,
  onDelete(): void,
}

const NoteEntry = ({ note, onDelete }: Props) => {
  return <div key={note.id}>
    {note.content}
    <a href={`/${note.id}`}>{note.createdAt.toLocaleDateString()}</a>
    <button onClick={onDelete}>Delete</button>
  </div>
}

export default NotesList;
