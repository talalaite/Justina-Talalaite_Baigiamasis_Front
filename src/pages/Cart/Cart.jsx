import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CartList, Notification } from '../../components';

const Cart = () => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('You need to login first');
      window.location.replace(
        'https://bitenu-medus-nef34.ondigitalocean.app/login',
      );
    }

    axios
      .get(
        'https://eshop-lb2vh.ondigitalocean.app/auth/login/content/basket',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        // console.log(res.data);
        if (res.data.message) {
          setMessage(res.data.message);
        } else {
          setData(res.data);
        }
      })
      .catch((e) => {
        if (e.response) {
          setMessage(e.response.data.error);
        } else {
          setMessage('Please try again later');
        }
      });
  }, []);

  function deleteNotification() {
    setMessage('');
  }

  return (
    <>
      <Notification message={message} handleDelete={deleteNotification} />
      <CartList products={data} />
    </>
  );
};

export default Cart;
