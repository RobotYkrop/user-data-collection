import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormContainer from '../components/FormContainer';
import TextInput from '../components/TextInput';
import SelectInput from '../components/SelectInput';
import { useAppContext } from '../AppContext';

const Form2 = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { formData, handleChange } = useAppContext();

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch categories', error);
      });
  }, []);

  const handleNext = () => {
    if (!formData.workPlace || !formData.address) {
      alert('Пожалуйста, заполните все поля');
      return;
    }
    navigate('/form3');
  };

  return (
    <FormContainer
      title="Адрес и место работы"
      onBack={() => navigate(-1)}
      onNext={handleNext}
    >
      <SelectInput
        id="workPlace"
        label="Место работы"
        name="workPlace"
        value={formData.workPlace}
        options={categories}
        onChange={handleChange}
        required
      />
      <TextInput
        id="address"
        label="Адрес проживания"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
      />
    </FormContainer>
  );
};

export default Form2;
