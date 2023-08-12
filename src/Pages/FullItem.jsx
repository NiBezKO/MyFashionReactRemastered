import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useParams } from 'react-router-dom';

const sizesClothes = ['M', 'L', 'XL', 'XL'];

const FullItem = ({ sizes }) => {
  console.log(sizes);
  const { id } = useParams();

  const [pageItem, setPageItem] = React.useState();
  const [activeSize, setActiveSize] = React.useState(0);

  React.useEffect(() => {
    async function fetchItem() {
      try {
        const { data } = await axios.get(
          'https://637fa1022f8f56e28e925aec.mockapi.io/clothingList/' + id,
        );
        setPageItem(data);
      } catch (error) {
        alert('Что-то пошло не так');
      }
    }
    fetchItem();
  }, [id]);

  if (!pageItem) {
    return 'Загрузка...';
  }

  const onChangeSize = (i) => {
    setActiveSize(i);
  };

  return (
    <main>
      <section>
        <div class="container">
          <div class="fitem">
            <h2 class="fitem__title">{pageItem.title}</h2>
            <div class="fitem__item">
              <img src={pageItem.imageUrl} alt="одежда" class="fitem__img" />
              <div class="fitem__inner fitem-inner">
                <p class="fitem-inner__price">{pageItem.price}</p>
                <h4>Выберите размер</h4>
                <ul class="fitem-inner__list">
                  {sizesClothes.map((item, i) => (
                    <li
                      key={i}
                      onClick={() => onChangeSize(i)}
                      className={activeSize === i ? 'active' : ''}>
                      {item}
                    </li>
                  ))}
                  {/* <li class="active">S</li>
                  <li>M</li>
                  <li>L</li>
                  <li>XL</li>
                  <li>XXL</li> */}
                </ul>

                <div class="fitem-inner__order">
                  <span class="fitem-inner__quantity">1</span>
                  <button class="fitem-inner__btn">Добавить в корзину</button>
                </div>
              </div>
            </div>
          </div>
          <div className="fitem__btn-container">
            <Link to="/shop">
              <button className="intro__btn  intro__btn--shop">Вернуться в магазин</button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FullItem;
