import React from 'react';
import styles from './BurgerMenu.module.scss';
import { Link } from 'react-router-dom';

const BurgerMenu = () => {
  return (
    <div className={styles.burgerMenu}>
      <ul className={styles.burgerMenu__list}>
        <li className={styles.burgerMenu__item}>
          <Link className={styles.burgerMenu__link} to="/">
            Главная
            <svg
              className={styles.burgerMenu__svg}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M21.66,10.25l-9-8a1,1,0,0,0-1.32,0l-9,8a1,1,0,0,0-.27,1.11A1,1,0,0,0,3,12H4v9a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V12h1a1,1,0,0,0,.93-.64A1,1,0,0,0,21.66,10.25ZM13,20H11V17a1,1,0,0,1,2,0Zm5,0H15V17a3,3,0,0,0-6,0v3H6V12H18ZM5.63,10,12,4.34,18.37,10Z" />
            </svg>
          </Link>
        </li>

        <li className={styles.burgerMenu__item}>
          <Link className={styles.burgerMenu__link} to="/shop">
            Магазин
            <svg
              className={styles.burgerMenu__svg}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M21.5,15a3,3,0,0,0-1.9-2.78l1.87-7a1,1,0,0,0-.18-.87A1,1,0,0,0,20.5,4H6.8L6.47,2.74A1,1,0,0,0,5.5,2h-2V4H4.73l2.48,9.26a1,1,0,0,0,1,.74H18.5a1,1,0,0,1,0,2H5.5a1,1,0,0,0,0,2H6.68a3,3,0,1,0,5.64,0h2.36a3,3,0,1,0,5.82,1,2.94,2.94,0,0,0-.4-1.47A3,3,0,0,0,21.5,15Zm-3.91-3H9L7.34,6H19.2ZM9.5,20a1,1,0,1,1,1-1A1,1,0,0,1,9.5,20Zm8,0a1,1,0,1,1,1-1A1,1,0,0,1,17.5,20Z" />
            </svg>
          </Link>
        </li>

        <li className={styles.burgerMenu__item}>
          <Link className={styles.burgerMenu__link} to="/about">
            О бренде
            <svg
              className={styles.burgerMenu__svg}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M12.3,12.22A4.92,4.92,0,0,0,14,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,1,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,12.3,12.22ZM9,11.5a3,3,0,1,1,3-3A3,3,0,0,1,9,11.5Zm9.74.32A5,5,0,0,0,15,3.5a1,1,0,0,0,0,2,3,3,0,0,1,3,3,3,3,0,0,1-1.5,2.59,1,1,0,0,0-.5.84,1,1,0,0,0,.45.86l.39.26.13.07a7,7,0,0,1,4,6.38,1,1,0,0,0,2,0A9,9,0,0,0,18.74,11.82Z" />
            </svg>
          </Link>
        </li>

        <li className={styles.burgerMenu__item}>
          <Link className={styles.burgerMenu__link} to="/contacts">
            Контакты
            <svg
              className={styles.burgerMenu__svg}
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24">
              <path d="M12,10a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,6Z" />
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
