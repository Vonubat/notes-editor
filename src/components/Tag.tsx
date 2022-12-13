import { useContextUpdater } from 'context/Context';
import React from 'react';
import DeleteIcon from '../assets/delete.png';
import styles from './Tag.module.scss';

interface MyProps {
  id: number;
  text: string;
}

export const Tag = ({ text, id }: MyProps): JSX.Element => {
  const { dispatch } = useContextUpdater();

  const handleDelete = (): void => {
    dispatch({ type: 'delete_tag', payload: id });
  };

  return (
    <div className={styles.tag}>
      <span>{text}</span>
      <img src={DeleteIcon} alt="Delete" onClick={handleDelete} className={styles.delete} />
    </div>
  );
};
