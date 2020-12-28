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
    <div>
      <div>
        <button onClick={onBack}>
          Go back
          </button>
        <button onClick={() => onDelete(note)}>
          Delete
        </button>
      </div>
      <Markdown>{note.content}</Markdown>
      <span>{note.createdAt.toLocaleDateString()}</span>
    </div>
  );
}

export default NoteDetails;
