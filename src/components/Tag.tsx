import React from 'react';
import DeleteIcon from '../assets/delete.png';
import styles from './Tag.module.scss';

interface MyProps {
  id: number;
  text: string;
}

export const Tag = ({ text, id }: MyProps): JSX.Element => {
  return (
    <div className={styles.tag}>
      <span>{text}</span>
      <img src={DeleteIcon} alt="Delete" className={styles.delete} />
    </div>
  );
};
