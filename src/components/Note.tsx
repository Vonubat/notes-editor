import React from 'react';
import styles from './Note.module.scss';

interface MyProps {
  id?: string;
  children?: string;
}

export const Note = ({ children, id }: MyProps): JSX.Element => {
  return (
    <div id={id} className={styles.note}>
      <span>{children}</span>
    </div>
  );
};
