import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Textarea.module.scss';

export const Textarea = (): JSX.Element => {
  const [value, setValue] = useState('New note');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea value={value} onChange={handleChange} className={styles.textarea} />
      <button type="submit" className={styles.button}>
        <span>Create note</span>
      </button>
    </form>
  );
};
