import React, { useState } from 'react';
import axios from 'axios';

import * as S from './FormRegister.style';

import Button from '../Button/Button';
import Notification from '../Notification/Notification';

const FormRegister = () => {
  const [message, setMessage] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function register(e) {
    e.preventDefault();
    setName(e.target.name.value);
    setEmail(e.target.email.value);
    setPassword(e.target.password.value);

    e.target.name.value = '';
    e.target.email.value = '';
    e.target.password.value = '';
    axios
      .post('https://eshop-lb2vh.ondigitalocean.app/auth/register', {
        name,
        email,
        password,
      })
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem('user', res.data.token);
        }

        if (res.data.msg.includes('registered')) {
          window.location.replace('/login');
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
      <S.RegisterWrapper>
        <Notification message={message} handleDelete={deleteNotification} />
        <S.Title>register</S.Title>
        <S.FormRegister onSubmit={register}>
          <S.Input
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            type="text"
            name="name"
            minLength="3"
            maxLength="255"
            required
          />

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

          <Button type="submit">Register</Button>
        </S.FormRegister>
      </S.RegisterWrapper>
    </>
  );
};

export default FormRegister;
