import Markdown from 'markdown-to-jsx';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Note } from './note';
import { NoteContext } from './note-context';

const NotesList = () => {
  const { notes, remove } = useContext(NoteContext);
  return (
    <div className="NotesList">
      <h1>Latest notes</h1>
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
  return <div className="NoteEntry" key={note.id}>
    <div className="content">
      <Markdown>{note.content}</Markdown>
      <Link
        className="link"
        to={`/${note.id}`}
        onClick={() => window.scrollTo(0, 0)}
      >
          {note.createdAt.toLocaleDateString()}
      </Link>
    </div>
    <div className="actions">
      <button className="delete-button" onClick={onDelete}>Delete note</button>
    </div>
  </div>
}

export default NotesList;
