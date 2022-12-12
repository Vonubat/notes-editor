import { useContextUpdater } from 'context/Context';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Textarea.module.scss';

export const Textarea = (): JSX.Element => {
  const [value, setValue] = useState('New note');
  const { dispatch } = useContextUpdater();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    dispatch({ type: 'create_note', payload: { text: value, id: Date.now() } });
    setValue('');
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea value={value} onChange={handleChange} className={styles.textarea} />
      <button type="submit" disabled={value ? false : true} className={styles.button}>
        <span>Create note</span>
      </button>
    </form>
  );
};
