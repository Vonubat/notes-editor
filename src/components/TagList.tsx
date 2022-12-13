import React from 'react';
import { useContextState } from 'context/Context';
import { ITag } from 'types';
import { Tag } from './';
import styles from './TagList.module.scss';

export const TagList = (): JSX.Element => {
  const { tags } = useContextState().state;

  return (
    <div className={styles['tag-list']}>
      {tags.map(
        ({ text, id, active }: ITag): JSX.Element => (
          <Tag key={String(id)} id={id} text={text} active={active} />
        )
      )}
    </div>
  );
};
