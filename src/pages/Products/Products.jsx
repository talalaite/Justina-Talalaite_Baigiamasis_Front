import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductsList, Notification } from '../../components';

const Products = () => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState();

  useEffect(() => {
    axios
      .get('https://eshop-lb2vh.ondigitalocean.app/content/products')
      .then((res) => {
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
      <ProductsList products={data} />
    </>
  );
};

export default Products;
