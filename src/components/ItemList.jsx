import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';
import { addToFavorite } from '../redux/slices/favoritesSlice';

const sizeCount = ['S', 'M', 'L', 'XL', 'XXL'];

const ItemList = ({ id, imageUrl, title, sizes, price }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id));
  const [activeSize, setActiveSize] = React.useState(0);

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      title,
      imageUrl,
      price,
      // size:  activeSize,
      size: sizeCount[activeSize],
    };
    dispatch(addItem(item));
  };

  const onClickAddFavorites = () => {
    const favoriteItem = {
      id,
      title,
      imageUrl,
      price,
      // size:  activeSize,
      sizes,
    };
    dispatch(addToFavorite(favoriteItem));
  };
  return (
    <li className="shopList__item shopList-item">
      <Link to={`/shop/${id}`}>
        <div className="shopList-item__top">
          <img src={imageUrl} alt="рубашка" className="shopList-item__img" />
          <div className="shopList-item__content">
            <svg
              className="row"
              width="32"
              height="24"
              viewBox="0 0 32 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0 12H31M31 12L20.186 1M31 12L20.186 23" stroke="white" />
            </svg>
          </div>
        </div>
      </Link>
      <h3 className="shopList-item__title">{title}</h3>
      <div className="shopList-item__inner">
        <div className="shopList-item__sizes">
          <ul>
            {sizes.map((item, i) => (
              <li
                key={i}
                onClick={() => setActiveSize(i)}
                className={activeSize === i ? 'active' : ''}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <span className="shopList-item__price">Цена: {price}</span>
        <div className="shopList-item__bottom">
          <button onClick={onClickAdd} className="shopList-item__btn">
            В корзину {addedCount > 0 && <span>{addedCount}</span>}
          </button>
          <svg
            className="shopList-item__favorites"
            onClick={onClickAddFavorites}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path d="M20.16,4.61A6.27,6.27,0,0,0,12,4a6.27,6.27,0,0,0-8.16,9.48l7.45,7.45a1,1,0,0,0,1.42,0l7.45-7.45A6.27,6.27,0,0,0,20.16,4.61Zm-1.41,7.46L12,18.81,5.25,12.07a4.28,4.28,0,0,1,3-7.3,4.25,4.25,0,0,1,3,1.25,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,6.05Z" />
          </svg>
        </div>
      </div>
    </li>
  );
};

export default ItemList;
