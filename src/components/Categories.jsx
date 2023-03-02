import React from 'react';

const Categories = ({ categoryId, onClickCategory }) => {
  const categories = ['Все', 'Женщины', 'Мужчины'];

  return (
    <>
      <ul className="category">
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={categoryId === i ? 'active' : ''}>
            <p className="category__title">{categoryName}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Categories;
