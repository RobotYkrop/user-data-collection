import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    phone: '',
    firstName: '',
    lastName: '',
    gender: '',
    workplace: '',
    address: '',
    loanAmount: 200,
    loanTerm: 10,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSliderChange = (name, value) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <AppContext.Provider value={{ formData, handleChange, handleSliderChange }}>
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);