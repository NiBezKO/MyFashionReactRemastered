import React from 'react';

const Contacts = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [falseName, setFalseName] = React.useState(false);
  const [falseEmail, setFalseEmail] = React.useState(false);
  const [falsePhone, setFalsePhone] = React.useState(false);
  const [nameError, setNameError] = React.useState('Поле Имя не может быть пустым!');
  const [emailError, setEmailError] = React.useState('Поле Email не может быть пустым!');
  const [phoneError, setPhoneError] = React.useState('Поле phone не должно быть пустым!');
  const [formValid, setFormValid] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const onChangeName = (e) => {
    setName(e.target.value);
    const re = /^[А-ЯЁ][а-яё]+$/;
    if (!re.test(String(e.target.value))) {
      setNameError('Некорректное имя');
    } else {
      setNameError('');
    }
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный email');
    } else {
      setEmailError('');
    }
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
    setPhoneError('');
    // var re = /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    // //var digits = e.replace(/\D/g, '');
    // if (!re.match(e.target.value)) {
    //   setPhoneError('Некорректный номер телефона');
    // } else {
    //   setPhoneError('');
    // }
  };

  const blurHandler = (e) => {
    // eslint-disable-next-line
    switch (e.target.name) {
      case 'name':
        setFalseName(true);
        break;
      case 'email':
        setFalseEmail(true);
        break;
      case 'phone':
        setFalsePhone(true);
        break;
    }
  };

  React.useEffect(() => {
    if (nameError || emailError || phoneError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError, phoneError]);

  const onClickSubmit = () => {
    setSuccess(true);
  };

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
            {success ? (
              <div className="form__success">Сообщение успешно отправлено</div>
            ) : (
              <form method="" className="form">
                <h3 className="form__title">Напишите нам</h3>
                {falseName && nameError && <div style={{ color: 'red' }}>{nameError}</div>}
                <input
                  value={name}
                  onChange={onChangeName}
                  onBlur={(e) => blurHandler(e)}
                  className="form__name"
                  name="name"
                  type="text"
                  placeholder="Имя"
                />
                {falseEmail && emailError && <div style={{ color: 'red' }}>{emailError}</div>}
                <input
                  value={email}
                  onChange={onChangeEmail}
                  onBlur={(e) => blurHandler(e)}
                  className="form__email"
                  name="email"
                  type="email"
                  placeholder="E-mail"
                />
                {falsePhone && phoneError && <div style={{ color: 'red' }}>{phoneError}</div>}
                <input
                  value={phone}
                  onChange={onChangePhone}
                  onBlur={(e) => blurHandler(e)}
                  className="form__phone"
                  name="phone"
                  type="tel"
                  placeholder="Телефон"
                />
                <textarea
                  className="form__textarea"
                  name="text"
                  placeholder="Сообщение"
                  cols="30"
                  rows="10"></textarea>
                <button onClick={() => onClickSubmit()} disabled={!formValid} type="submit">
                  Отправить
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contacts;
