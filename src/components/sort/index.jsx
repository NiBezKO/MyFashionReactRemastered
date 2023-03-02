import React from 'react';
import style from './Sort.module.scss';

const Sort = ({ sortType, onChangeSort }) => {
  const sortList = [
    { name: 'популярности', sortProperty: 'rating' },
    { name: 'убыванию цены', sortProperty: '-price' },
    { name: 'возрастанию цены', sortProperty: 'price' },
  ];

  const [open, setOpen] = React.useState(false);

  const onClickSort = (i) => {
    onChangeSort(i);
    setOpen(false);
  };

  return (
    <div className={style.sort}>
      <div className={style.sort__inner}>
        <div className={style.sort__label}>
          <b>Сортировка по:</b>
          <span onClick={() => setOpen(!open)}>{sortType.name}</span>
        </div>
        {open ? (
          <div className={style.sort__popup}>
            <ul className={style.sort__list}>
              {sortList.map((obj, i) => (
                <li
                  key={i}
                  onClick={() => onClickSort(obj)}
                  className={sortType.sortProperty === obj.sortProperty ? style.active : null}>
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
