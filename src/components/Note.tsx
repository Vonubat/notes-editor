import React from 'react';
import EditIcon from '../assets/edit.png';
import DeleteIcon from '../assets/delete.png';
import styles from './Note.module.scss';

interface MyProps {
  id: number;
  children: string;
}

export const Note = ({ children, id }: MyProps): JSX.Element => {
  return (
    <div className={styles.note}>
      <div className={styles['controls-container']}>
        <img src={EditIcon} alt="Edit" className={styles.edit} />
        <img src={DeleteIcon} alt="Delete" className={styles.delete} />
      </div>
      <span>{children}</span>
    </div>
  );
};
