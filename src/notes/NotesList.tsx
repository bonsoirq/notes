import Markdown from 'markdown-to-jsx';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
    <Markdown>{note.content}</Markdown>
    <Link to={`/${note.id}`}>{note.createdAt.toLocaleDateString()}</Link>
    <button onClick={onDelete}>Delete</button>
  </div>
}

export default NotesList;
