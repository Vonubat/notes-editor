import React from 'react';
import { useContextState } from 'context/Context';
import { IData } from 'types';
import { Note } from './';
import styles from './NoteList.module.scss';

export const NoteList = (): JSX.Element => {
  const { notes } = useContextState().state;

  return (
    <div className={styles['note-list']}>
      {notes.map(
        ({ text, id }: IData): JSX.Element => (
          <Note key={String(id)} id={String(id)}>
            {text}
          </Note>
        )
      )}
    </div>
  );
};
