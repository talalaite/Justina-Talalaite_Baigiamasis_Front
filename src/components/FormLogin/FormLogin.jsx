import React, { useState } from 'react';
import axios from 'axios';

import * as S from './FormLogin.style';

import Button from '../Button/Button';
import Notification from '../Notification/Notification';

const FormLogin = () => {
  const [message, setMessage] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function login(e) {
    e.preventDefault();
    setEmail(e.target.email.value);
    setPassword(e.target.password.value);

    e.target.email.value = '';
    e.target.password.value = '';
    axios
      .post('https://eshop-lb2vh.ondigitalocean.app/auth/login', {
        email,
        password,
      })
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem('user', res.data.token);
        }

        if (res.data.msg.includes('logged')) {
          window.location.replace(
            'https://bitenu-medus-nef34.ondigitalocean.app/cart',
          );
        }
        setMessage(res.data.msg);
      })
      .catch((err) => {
        if (err.response === undefined) {
          setMessage('Servers are down. Please try again later');
        } else {
          setMessage(err.response.data.error);
        }
      });
  }

  function deleteNotification() {
    setMessage('');
  }

  return (
    <>
      <S.LoginWrapper>
        <Notification message={message} handleDelete={deleteNotification} />
        <S.Title>login</S.Title>
        <S.FormLogin onSubmit={login}>
          <S.Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            name="email"
            minLength="3"
            maxLength="255"
            required
          />

          <S.Input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            name="password"
            minLength="6"
            maxLength="255"
            required
          />

          <Button type="submit">login</Button>
        </S.FormLogin>
      </S.LoginWrapper>
    </>
  );
};

export default FormLogin;
