import { useContextState, useContextUpdater } from 'context/Context';
import React, { ChangeEvent } from 'react';
import { uniqueID } from 'utils';
import styles from './Controls.module.scss';

export const Controls = (): JSX.Element => {
  const { filter, tags } = useContextState().state;
  const { dispatch } = useContextUpdater();

  const handleClick = (): void => {
    dispatch({ type: 'create_note', payload: { text: 'New note', id: uniqueID() } });
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    dispatch({ type: 'set_filter', payload: e.target.value });
  };

  return (
    <div className={styles.container}>
      <button onClick={handleClick} className={styles.button}>
        <span>+ Create note</span>
      </button>

      <div className={styles['select-container']}>
        <label htmlFor="tag-filter">Select tag filter</label>
        <select name="tag-filter" value={filter} onChange={handleChange} className={styles.select}>
          <option value="NONE">NONE</option>
          {tags.map((tag) => (
            <option key={tag.text} value={tag.text}>
              {tag.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
