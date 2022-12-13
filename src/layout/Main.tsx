import { NoteList, Controls, TagList } from 'components';
import React from 'react';
import styles from './Main.module.scss';

export const Main = (): JSX.Element => {
  return (
    <div className={styles.main}>
      <Controls />
      <NoteList />
      <TagList />
    </div>
  );
};
