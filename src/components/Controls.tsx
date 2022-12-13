import { useContextUpdater } from 'context/Context';
import React from 'react';
import { uniqueID } from 'utils';
import styles from './Controls.module.scss';

export const Controls = (): JSX.Element => {
  const { dispatch } = useContextUpdater();

  const handleClick = (): void => {
    dispatch({ type: 'create_note', payload: { text: 'New note', id: uniqueID() } });
  };

  return (
    <button onClick={handleClick} className={styles.button}>
      <span>+ Create note</span>
    </button>
  );
};
