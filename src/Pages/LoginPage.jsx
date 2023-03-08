import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoginIn } from '../redux/slices/authorizationSlice';

const LoginPage = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.authorization.loginIn);
  //const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [login, setLogin] = React.useState({ user: 'user' });
  const [pass, setPass] = React.useState({ password: 'pass' });

  const onChangeLogin = (event) => {
    setLogin(event.target.value);
  };

  const onChangePass = (event) => {
    setPass(event.target.value);
  };

  const addHandler = () => {
    // const userName = login.current.value;
    // const userPassword = pass.current.value;
    dispatch(setLoginIn(true));
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
