import React from 'react';
import style from './Sort.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../../redux/slices/filterSlice';

export const sortList = [
  { name: 'популярности', sortProperty: 'rating' },
  { name: 'возрастанию цены', sortProperty: '-price' },
  { name: 'убыванию цены', sortProperty: 'price' },
];

const Sort = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);

  const [open, setOpen] = React.useState(false);

  const onClickSort = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  return (
    <div className={style.sort}>
      <div className={style.sort__inner}>
        <div className={style.sort__label}>
          <b>Сортировка по:</b>
          <span onClick={() => setOpen(!open)}>{sort.name}</span>
        </div>
        {open ? (
          <div className={style.sort__popup}>
            <ul className={style.sort__list}>
              {sortList.map((obj, i) => (
                <li
                  key={i}
                  onClick={() => onClickSort(obj)}
                  className={sort.sortProperty === obj.sortProperty ? style.active : null}>
                  {obj.name}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Sort;
