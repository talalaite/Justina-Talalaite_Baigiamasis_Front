import React, { createContext, useState } from 'react';

export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [items, setItems] = useState();

  return (
    <BasketContext.Provider value={{ items, setItems }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
