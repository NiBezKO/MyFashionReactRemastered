import React from 'react';
import style from './Sort.module.scss';
import { useDispatch } from 'react-redux';
import { setSort } from '../../redux/slices/filterSlice';

export const sortList = [
  { name: 'популярности', sortProperty: 'rating' },
  { name: 'возрастанию цены', sortProperty: '-price' },
  { name: 'убыванию цены', sortProperty: 'price' },
];

const Sort = React.memo(({ value }) => {
  const dispatch = useDispatch();
  //мы из родителя. не из менеджера, дастём параметры сортировки(value)
  // const sort = useSelector((state) => state.filter.sort); это нам не надо

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
          <span onClick={() => setOpen(!open)}>{value.name}</span>
        </div>
        {open ? (
          <div className={style.sort__popup}>
            <ul className={style.sort__list}>
              {sortList.map((obj, i) => (
                <li
                  key={i}
                  onClick={() => onClickSort(obj)}
                  className={value.sortProperty === obj.sortProperty ? style.active : null}>
                  {obj.name}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
});

export default Sort;
