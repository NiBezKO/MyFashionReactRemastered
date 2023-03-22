import React from 'react';
import ItemList from '../components/ItemList';
import { useSelector, useDispatch } from 'react-redux';
import { clearFavorites } from '../redux/slices/favoritesSlice';

const Favorites = () => {
  const dispatch = useDispatch();
  const { favoritesItems } = useSelector((state) => state.liked);

  const onClickCLearFavorites = () => {
    if (window.confirm('Вы дествительно хотите очистить список избранного?')) {
      dispatch(clearFavorites());
    }
  };
  return (
    <div className="favorites">
      <div className="favorites__top favorites-top">
        <h2 className="favorites-top__title">Избранное</h2>
        <span onClick={onClickCLearFavorites}>Очистить избранное</span>
      </div>
      <ul className="favorites__list favorites-list">
        {favoritesItems.map((obj, id) => (
          <ItemList key={id} {...obj} />
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
