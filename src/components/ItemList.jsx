import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';

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
        <button onClick={onClickAdd} className="shopList-item__btn">
          В корзину {addedCount > 0 && <span>{addedCount}</span>}
        </button>
      </div>
    </li>
  );
};

export default ItemList;
