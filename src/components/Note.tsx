import React from 'react';
import styles from './Note.module.scss';

interface MyProps {
  children?: string;
}

export const Note = ({ children }: MyProps): JSX.Element => {
  return <div className={styles['sticky-container']}>{children}</div>;
};
