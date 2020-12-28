import { isBlank } from '../lib/string';
import { useFormik } from 'formik';
import React from 'react';

const NewNote = () => {

  const {
    handleSubmit,
    handleBlur,
    handleChange,
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
      // TODO: add note to context
    }
  })
  return (
    <form onSubmit={handleSubmit}>
      <h3>Note</h3>
      <textarea
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.content}
        name="content"
        placeholder="Note text"
        cols={30}
        rows={10}
      />
      {touched.content && errors.content}
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
