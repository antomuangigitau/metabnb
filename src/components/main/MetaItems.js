import React from 'react';
import { metaImages } from '../../data';
import styles from './MetaItems.module.css';
const MetaItems = () => {
  return (
    <section className={styles['meta__container']}>
      <div className={styles['meta__items']}>
        {metaImages.map((images) => {
          const { id, img } = images;
          return <img key={id} src={img} alt="" />;
        })}
      </div>
    </section>
  );
};

export default MetaItems;
