import React from 'react';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <div className="cart__empty">
      <h2>
        Корзина пустая <icon>😕</icon>
      </h2>
      <p>
        Вероятней всего, вы еще не добавляли товар в корзину.
        <br />
        Для того, чтобы просмотреть ассортимент магазина и добавить понравившуюся одежду, перейдите
        на страницу магазина.
      </p>
      <Link to="/shop">
        <button className="intro__btn">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 13L1 6.93015L6.86175 1"
              stroke="#D3D3D3"
              stroke-width="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"></path>
          </svg>
          Вернуться в магазин
        </button>
      </Link>
    </div>
  );
};

export default CartEmpty;
