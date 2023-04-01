import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';
import { addToFavorite } from '../redux/slices/favoritesSlice';
import { removeFavorite } from '../redux/slices/favoritesSlice';

const sizeCount = ['S', 'M', 'L', 'XL', 'XXL'];

const ItemList = ({ id, imageUrl, title, sizes, price }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id));
  const [activeSize, setActiveSize] = React.useState(0);

  const [isFavorite, setIsFavorite] = React.useState(false);

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
    setIsFavorite(true);
    dispatch(addToFavorite(favoriteItem));
  };

  const onClickToRemoveFavorites = () => {
    dispatch(removeFavorite({ id }));
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
          {isFavorite ? (
            <svg
              className="shopList-item__favorites"
              onClick={onClickToRemoveFavorites}
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24">
              <path d="M19.3 5.71002C18.841 5.24601 18.2943 4.87797 17.6917 4.62731C17.0891 4.37666 16.4426 4.2484 15.79 4.25002C15.1373 4.2484 14.4909 4.37666 13.8883 4.62731C13.2857 4.87797 12.739 5.24601 12.28 5.71002L12 6.00002L11.72 5.72001C10.7917 4.79182 9.53273 4.27037 8.22 4.27037C6.90726 4.27037 5.64829 4.79182 4.72 5.72001C3.80386 6.65466 3.29071 7.91125 3.29071 9.22002C3.29071 10.5288 3.80386 11.7854 4.72 12.72L11.49 19.51C11.6306 19.6505 11.8212 19.7294 12.02 19.7294C12.2187 19.7294 12.4094 19.6505 12.55 19.51L19.32 12.72C20.2365 11.7823 20.7479 10.5221 20.7442 9.21092C20.7405 7.89973 20.2218 6.64248 19.3 5.71002Z" />
            </svg>
          ) : (
            <svg
              className="shopList-item__favorites"
              onClick={onClickAddFavorites}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M20.16,4.61A6.27,6.27,0,0,0,12,4a6.27,6.27,0,0,0-8.16,9.48l7.45,7.45a1,1,0,0,0,1.42,0l7.45-7.45A6.27,6.27,0,0,0,20.16,4.61Zm-1.41,7.46L12,18.81,5.25,12.07a4.28,4.28,0,0,1,3-7.3,4.25,4.25,0,0,1,3,1.25,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,6.05Z" />
            </svg>
          )}
        </div>
      </div>
    </li>
  );
};

export default ItemList;
