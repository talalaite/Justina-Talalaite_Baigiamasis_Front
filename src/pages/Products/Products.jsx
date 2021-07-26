import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { ProductsList, Notification } from '../../components';

const Products = () => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState([]);

  useEffect(() => {
    axios
      .get('https://eshop-lb2vh.ondigitalocean.app/content/products')
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        if (e.response) {
          setMessage('Please try again later');
        } else {
          setMessage(e.response.data.error);
        }
      });
  });

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
