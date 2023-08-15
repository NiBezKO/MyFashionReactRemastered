import React from 'react';

const Pagination = ({ nav, disable, onNextPageClick, onPrevPageClick }) => {
  const handleNextPageClick = () => {
    onNextPageClick();
  };
  const handlePrevPageClick = () => {
    onPrevPageClick();
  };

  return (
    <div className="paginator">
      <button className="arrow" type="button" onClick={handlePrevPageClick} disabled={disable.left}>
        {'<'}
      </button>
      {nav && (
        <span className="paginator">
          {nav.current} / {nav.total}
        </span>
      )}
      <button
        className="arrow"
        type="button"
        onClick={handleNextPageClick}
        disabled={disable.right}>
        {'>'}
      </button>
    </div>
  );
};

export default React.memo(Pagination);
