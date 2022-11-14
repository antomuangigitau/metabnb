import React from 'react';
import styles from './Main.module.css';
import Content from './Content';
import MetaItems from './MetaItems';
const Main = () => {
  return (
    <main className={styles.main}>
      <Content />
      <MetaItems />
    </main>
  );
};

export default Main;
