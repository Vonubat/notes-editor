import React from 'react';
import EditIcon from '../assets/edit.png';
import DeleteIcon from '../assets/delete.png';
import styles from './Note.module.scss';
import { useContextUpdater } from 'context/Context';

interface MyProps {
  id: number;
  children: string;
}

export const Note = ({ children, id }: MyProps): JSX.Element => {
  const { dispatch } = useContextUpdater();

  const handleDelete = (): void => {
    dispatch({ type: 'delete_note', payload: id });
  };

  return (
    <div className={styles.note}>
      <div className={styles['controls-container']}>
        <img src={EditIcon} alt="Edit" className={styles.edit} />
        <img src={DeleteIcon} alt="Delete" onClick={handleDelete} className={styles.delete} />
      </div>
      <span>{children}</span>
    </div>
  );
};
