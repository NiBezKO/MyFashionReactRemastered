import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import ItemList from '../components/ItemList';
import Categories from '../components/Categories';
import Skeleton from '../components/Skeleton';
import Sort from '../components/sort';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';
//import { setProducts, fetchProducts } from '../redux/slices/productSlice';

const Shop = () => {
  const { categoryId, sort } = useSelector((state) => state.filter);
  const sortType = sort.sortProperty;
  const navigate = useNavigate();
  //const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const [products, setProducts] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const inputRef = useRef();

  const onChangeValue = (event) => {
    setSearchValue(event.target.value);
  };

  const clearInput = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const goBack = () => navigate(-1);

  // const getProducts =
  //   (async () => {
  //     setIsLoading(true);
  //     const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
  //     const sortBy = sortType.sortProperty.replace('-', '');
  //     const category = categoryId > 0 ? `category=${categoryId}` : '';

  //     try {
  //       const res = await axios.get(
  //         `https://637fa1022f8f56e28e925aec.mockapi.io/clothingList?${category}&sortBy=${sortBy}&order=${order}`,
  //       );
  //       dispatch(setProducts(res.data));
  //     } catch (error) {
  //       alert('Не удалось загрузить товары');
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   },
  //   [categoryId, dispatch, sortType.sortProperty]);

  // React.useEffect(() => {
  //   getProducts();
  // }, [getProducts]);

  React.useEffect(() => {
    setIsLoading(true);
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    try {
      axios
        .get(
          `https://637fa1022f8f56e28e925aec.mockapi.io/clothingList?${category}&sortBy=${sortBy}&order=${order}`,
        )
        .then((res) => {
          setProducts(res.data);
        })
        .finally(() => setIsLoading(false));
    } catch (error) {
      alert('Не удалось загрузить товары');
    }
  }, [categoryId, sortType]);

  return (
    <main>
      <div className="container">
        <div className="shop">
          <div className="shop__top shop-top">
            <div className="shop-top__inner">
              <h1 className="shop-top__title">Магазин</h1>
              <p onClick={goBack}>Назад</p>
            </div>
            <div className="shop-top__search">
              <svg
                className="shop-top__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
              </svg>
              <input
                value={searchValue}
                ref={inputRef}
                onChange={onChangeValue}
                placeholder="Найти..."
                className="shop-top__input"
                type="text"
              />

              {searchValue ? (
                <svg
                  onClick={clearInput}
                  className="shop-top__clear"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
                </svg>
              ) : null}
            </div>
          </div>
        </div>
        <div className="shop__catalog-container">
          <Categories categoryId={categoryId} onClickCategory={onClickCategory} />
          <Sort />
        </div>
        <ul className="shopList">
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : products
                .filter((item) => {
                  if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
                    return true;
                  }
                  return false;
                })
                .map((obj) => <ItemList key={obj.id} {...obj} />)}
        </ul>
      </div>
    </main>
  );
};

export default Shop;
