import React, { ChangeEvent, useState } from 'react';
import DeleteIcon from '../assets/delete.png';
import styles from './Note.module.scss';
import { useContextUpdater } from 'context/Context';

interface MyProps {
  id: number;
  text: string;
}

export const Note = ({ text, id }: MyProps): JSX.Element => {
  const [value, setValue] = useState<string>(text);
  const [editMode, setEditMode] = useState<boolean>(false);
  const { dispatch } = useContextUpdater();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(e.target.value);
  };

  const handleDelete = (): void => {
    dispatch({ type: 'delete_note', payload: id });
  };

  const handleEdit = (): void => {
    setEditMode(true);
  };

  const handleUpdate = (): void => {
    setEditMode(false);
    dispatch({ type: 'update_note', payload: { text: value, id } });
  };

  return (
    <div className={editMode ? `${styles.note} ${styles.active}` : `${styles.note}`}>
      <img src={DeleteIcon} alt="Delete" onClick={handleDelete} className={styles.delete} />
      <textarea
        value={value}
        onChange={handleChange}
        onFocus={handleEdit}
        onBlur={handleUpdate}
        className={styles.textarea}
      />
    </div>
  );
};
