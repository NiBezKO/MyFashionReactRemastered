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
          </Link>
        </li>

        <li className={styles.burgerMenu__item}>
          <Link className={styles.burgerMenu__link} to="/shop">
            Магазин
          </Link>
        </li>

        <li className={styles.burgerMenu__item}>
          <Link className={styles.burgerMenu__link} to="/about">
            О бренде
          </Link>
        </li>

        <li className={styles.burgerMenu__item}>
          <Link className={styles.burgerMenu__link} to="/contacts">
            Контакты
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
