import React from 'react';
import { Link } from 'react-router-dom';

const Info = () => {
  return (
    <div className="info__page">
      <h2>Товар успешно оплачен</h2>
      <p>Ожидайте смс-оповещения, мы сообщим вам когда товар можно будет забрать</p>
      <Link to="/">
        <button className="intro__btn">Вернуться на главную</button>
      </Link>
    </div>
  );
};

export default Info;
