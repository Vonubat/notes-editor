import React from 'react';
import GitHubIcon from '../assets/GitHub-Mark-Light-32px.png';
import styles from './Header.module.scss';

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <span>Notes Editor</span>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/Vonubat">
        <img src={GitHubIcon} alt="" />
      </a>
    </header>
  );
};
