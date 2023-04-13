import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoginIn } from '../redux/slices/authorizationSlice';

const LoginPage = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.authorization.loginIn);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [login, setLogin] = React.useState('');
  const [pass, setPass] = React.useState('');

  // const [loginError, setLoginError] = React.useState();
  // const [formValid, setFormValid] = React.useState(false);

  // const onChangeLogin = (event) => {
  //   setLogin(event.target.value);
  //   const login = 'user26';
  //   if (!login.test(String(event.target.value))) {
  //     alert('Некорректный логин');
  //   } else {
  //     alert('правильно');
  //   }
  // };

  // const blurHandler = (event) => {
  //   // eslint-disable-next-line
  //   switch (event.target.login) {
  //     case 'login':
  //       alert('Логин не верен');
  //   }
  // };

  const user = {
    iserName: login,
    password: pass,
  };

  const onChangeLogin = (event) => {
    setLogin(event.target.value);
  };

  const onChangePass = (event) => {
    setPass(event.target.value);
  };

  const addHandler = () => {
    if (user) {
      dispatch(setLoginIn(true));
    } else {
      alert('неправильно введён логин или пароль');
    }
    // const userName = login.current.value;
    // const userPassword = pass.current.value;
  };
  return (
    <div className="loginPage">
      {loggedIn ? (
        'Вы вошли в аккаунт!'
      ) : (
        <form action="" className="loginPage__form">
          <h3 className="loginPage__title">Авторизация</h3>
          <input
            value={login}
            onChange={onChangeLogin}
            type="text"
            className="loginPage__login"
            placeholder="Логин"
          />
          <input
            value={pass}
            onChange={onChangePass}
            type="text"
            className="loginPage__password"
            placeholder="Пароль"
          />
          <button onClick={addHandler} className="loginPage__btn">
            Войти
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
