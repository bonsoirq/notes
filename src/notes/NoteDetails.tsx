import Markdown from 'markdown-to-jsx';
import React from 'react';
import { Note } from './note';

type Props = {
  note: Note,
  onBack(): void,
  onDelete(note: Note): void,
}

const NoteDetails = ({ note, onBack, onDelete }: Props) => {
  return (
    <div className='NoteDetails'>
      <div className="actions">
        <button onClick={onBack}>
          Go back
          </button>
        <button className="delete-button" onClick={() => onDelete(note)}>
          Delete note
        </button>
      </div>
      <div className="content">
        <Markdown>{note.content}</Markdown>
        <span className="date">{note.createdAt.toLocaleDateString()}</span>
      </div>
    </div>
  );
}

export default NoteDetails;
