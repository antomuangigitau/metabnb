import React from 'react';
import styles from './Content.module.css';
import { images, anotherImage } from '../../data';
const Content = () => {
  return (
    <section className={styles['container']}>
      <div className={styles['text__content']}>
        <h4>
          Rent a <span>Place</span> away from <span>Home</span> in the {''}
          <span>Metaverse</span>
        </h4>
        <p>
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div className={styles['input__search']}>
          <div className={styles['search']}>
            <input
              type="text"
              name=""
              id=""
              placeholder="search for location"
            />
          </div>
          <span>Search</span>
        </div>
      </div>
      <div className={styles['image__section']}>
        <div className={styles['image__left']}>
          {images.map((image) => {
            const { id, img } = image;
            return <img key={id} src={img} alt="images" />;
          })}
        </div>
        <div className="image__right">
          {anotherImage.map((image) => {
            const { id, img } = image;
            return <img key={id} src={img} alt="images" />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Content;
