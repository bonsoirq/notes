import { isBlank, randomString } from '../lib/string';
import { useFormik } from 'formik';
import React, { useContext } from 'react';
import { NoteContext } from './note-context';
import { Note } from './note';

const NewNote = () => {
  const { add } = useContext(NoteContext);

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    resetForm,
    values,
    errors,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      content: '',
    },
    validate: values => {
      const errors: { [key: string]: string } = {}
      if (isBlank(values.content)) {
        errors.content = 'Required'
      }
      return errors
    },
    onSubmit: values => {
      const note: Note = {
        id: randomString(),
        content: values.content,
        createdAt: new Date(),
      }

      add(note)
      resetForm()
    }
  })
  return (
    <form className="NewNote" onSubmit={handleSubmit}>
      <h4>Note</h4>
      <textarea
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.content}
        name="content"
        placeholder="Note text"
      />
      <span className="error">{touched.content && errors.content}</span>
      <button
        disabled={!isValid}
        type="submit"
      >
        Add note
      </button>
    </form>
  );
}

export default NewNote;
