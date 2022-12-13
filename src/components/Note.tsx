import React, { ChangeEvent, useState } from 'react';
import DeleteIcon from '../assets/delete.png';
import { useContextState, useContextUpdater } from 'context/Context';
import { getTags, uniqueID } from 'utils';
import styles from './Note.module.scss';

interface MyProps {
  id: number;
  text: string;
}

export const Note = ({ text, id }: MyProps): JSX.Element => {
  const [value, setValue] = useState<string>(text);
  const [editMode, setEditMode] = useState<boolean>(false);
  const { filter } = useContextState().state;
  const { dispatch } = useContextUpdater();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(e.target.value);
  };

  const handleDelete = (): void => {
    dispatch({ type: 'delete_note', payload: id });
  };

  const handleEdit = (): void => {
    setEditMode(true);
    const tags: string[] = getTags(value);

    if (tags.length) {
      tags.map((tag) => dispatch({ type: 'activate_tag', payload: tag }));
    }
  };

  const handleUpdate = (): void => {
    setEditMode(false);
    const tags: string[] = getTags(value);

    if (tags.length) {
      tags.map((tag) => dispatch({ type: 'reset_tags', payload: tag }));
    }

    if (value !== text) {
      if (tags.length) {
        tags.map((tag) =>
          dispatch({ type: 'add_tag', payload: { text: tag, id: uniqueID(), active: false } })
        );
      }

      dispatch({ type: 'update_note', payload: { text: value, id } });
    }
  };

  const setStyle = (): string => {
    const isPassFilter: boolean =
      filter === '' || filter === 'NONE' || value.toUpperCase().includes(filter);

    if (!isPassFilter) {
      return styles.hidden;
    }

    return editMode ? `${styles.note} ${styles.active}` : `${styles.note}`;
  };

  return (
    <div className={setStyle()}>
      <div className={styles['control-container']}>
        <span>{editMode ? 'Edit mode' : 'View mode'}</span>
        <img src={DeleteIcon} alt="Delete" onClick={handleDelete} className={styles.delete} />
      </div>

      <textarea
        value={value}
        onChange={handleChange}
        onFocus={handleEdit}
        onBlur={handleUpdate}
        className={styles.textarea}
      />
    </div>
  );
};
