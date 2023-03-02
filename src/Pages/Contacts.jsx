import React from 'react';

const Contacts = () => {
  return (
    <main>
      <div className="container">
        <div className="contacts">
          <h2 className="contacts__title">Контакты</h2>
          <section className="contacts__info contacts-info">
            <div className="contacts-info__left">
              <p>Телефон</p>
              <i>+7 (495) 823-54-12</i>
            </div>
            <div className="contacts-info__center">
              <p>E-mail</p>
              <i>info@sitename.com</i>
            </div>
            <div className="contacts-info__right">
              <p>Адрес</p>
              <address>г. Москва, 3-я улица Строителей, 25</address>
            </div>
          </section>
          <div className="contacts__bottom contacts-bottom">
            <form action="#" method="post" className="form">
              <h3 className="form__title">Напишите нам</h3>
              <input className="form__name" name="name" type="text" placeholder="Имя" />
              <input className="form__email" name="email" type="text" placeholder="E-mail" />
              <input className="form__phone" name="phone" type="text" placeholder="Телефон" />
              <textarea
                className="form__textarea"
                name="text"
                placeholder="Сообщение"
                cols="30"
                rows="10"></textarea>
              <button type="submit">Отправить</button>
              <div className="form__success">Сообщение успешно отправлено</div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contacts;
