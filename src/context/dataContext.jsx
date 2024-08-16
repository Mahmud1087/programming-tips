/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { tips } from '../../data';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(tips);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
