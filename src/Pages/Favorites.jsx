import React from 'react';
import ItemList from '../components/ItemList';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const { favoritesItems } = useSelector((state) => state.liked);

  return (
    <div className="favorites">
      <div className="favorites__top">
        <h2 className="favorites__title">Избранное</h2>
      </div>
      <ul className="favorites__list favorites-list">
        {favoritesItems.map((obj) => (
          <ItemList key={obj.id} {...obj} />
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
