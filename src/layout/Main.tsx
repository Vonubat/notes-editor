import { Note, Textarea } from 'components';
import React from 'react';
import styles from './Main.module.scss';

export const Main = (): JSX.Element => {
  return (
    <div className={styles.main}>
      <Textarea />
      <Note />
    </div>
  );
};
