import { useContextUpdater } from 'context/Context';
import React from 'react';
import DeleteIcon from '../assets/delete.png';
import styles from './Tag.module.scss';

interface MyProps {
  id: number;
  text: string;
  active: boolean;
}

export const Tag = ({ text, id, active }: MyProps): JSX.Element => {
  const { dispatch } = useContextUpdater();

  const handleDelete = (): void => {
    dispatch({ type: 'delete_tag', payload: id });
  };

  return (
    <div className={active ? `${styles.tag} ${styles.active}` : `${styles.tag}`}>
      <span>{text}</span>
      <img src={DeleteIcon} alt="Delete" onClick={handleDelete} className={styles.delete} />
    </div>
  );
};
