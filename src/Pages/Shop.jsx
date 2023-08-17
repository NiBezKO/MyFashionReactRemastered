import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import Pagination from '../components/paginations/Pagination';

import ItemList from '../components/ItemList';
import Categories from '../components/Categories';
import Skeleton from '../components/Skeleton';
import Sort from '../components/sort';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';
import { fetchProducts } from '../redux/slices/productSlice';

// const ROWS_PER_PAGE = 10;

const Shop = () => {
  const { categoryId, sort } = useSelector((state) => state.filter);
  const sortType = sort.sortProperty;
  const navigate = useNavigate();
  //const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const [products, setProducts] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [visible, setVisible] = React.useState(1);
  // const [page, setPage] = React.useState(1);
  // const [totalPage, setTotalPage] = React.useState(3);
  const inputRef = useRef();

  // const getTotalPageCount = (rowCount) => Math.ceil(rowCount / ROWS_PER_PAGE);

  const onChangeValue = (event) => {
    setSearchValue(event.target.value);
  };

  const clearInput = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  const onClickCategory = React.useCallback((id) => {
    dispatch(setCategoryId(id));
  }, []);

  // const onChangePage = (page) => {
  //   dispatch(setCurrentPage(page));
  // };

  // const handleNextPageClick = React.useCallback(() => {
  //   const current = page;
  //   const next = current + 1;
  //   const total = products ? getTotalPageCount(products.count) : current;

  //   setPage(next <= total ? next : current);
  // }, [page, products]);

  // const handlePrevPageClick = React.useCallback(() => {
  //   const current = page;
  //   const prev = current - 1;

  //   setPage(prev > 0 ? prev : current);
  // }, [page]);

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

  const showMoreProducts = () => {
    setVisible((prevValue) => prevValue + 1);
  };

  const backPage = () => {
    setVisible((prevValue) => prevValue - 1);
  };

  //&page=${page}&limit=10

  React.useEffect(() => {
    setIsLoading(true);
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    try {
      dispatch(fetchProducts({ order, sortBy, category })).then(
        (res) => setProducts(res.payload)
      )
      .finally(
        () => setIsLoading(false)
      );
    } catch (error) {
      alert('Не удалось загрузить товары');
    }
  }, [categoryId, sortType, visible]);

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
          <Sort value={sort} />
        </div>
        <ul className="shopList">
          {isLoading && products
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
        {/* {products && (
          <Pagination
            onNextPageClick={handleNextPageClick}
            onPrevPageClick={handlePrevPageClick}
            disable={{
              left: page === 1,
              right: page === getTotalPageCount(products.count),
            }}
            nav={{ current: page, total: getTotalPageCount(products.count) }}
          />
        )} */}

        {/* {page < 3 ? ( */}

        {visible === 1 ? (
          <button className="btn-more" disabled onClick={backPage}>
            назад
          </button>
        ) : (
          <button className="btn-more" onClick={backPage}>
            назад
          </button>
        )}

        {visible < 3 ? (
          <button className="btn-more" onClick={showMoreProducts}>
            Ещё
          </button>
        ) : (
          <button className="btn-more" disabled onClick={showMoreProducts}>
            Ещё
          </button>
        )}

        {/* ) : null} */}
      </div>
    </main>
  );
};

export default Shop;
