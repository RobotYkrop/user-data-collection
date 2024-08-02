import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import TextInput from '../components/TextInput';
import SelectInput from '../components/SelectInput';
import PhoneInput from '../components/PhoneInput';
import { useAppContext } from '../AppContext';

const Form1 = () => {
  const navigate = useNavigate();
  const { formData, handleChange } = useAppContext();

  const handleNext = () => {
    if (formData.phone && formData.firstName && formData.lastName && formData.gender) {
      navigate('/form2');
    } else {
      alert('Пожалуйста, заполните все обязательные поля.');
    }
  };

  return (
    <FormContainer
      title="Личные данные"
      onNext={handleNext}
    >
      <PhoneInput
        id="phone"
        label="Телефон"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <TextInput
        id="firstName"
        label="Имя"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <TextInput
        id="lastName"
        label="Фамилия"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <SelectInput
        id="gender"
        label="Пол"
        name="gender"
        value={formData.gender}
        options={['Мужской', 'Женский']}
        onChange={handleChange}
        required
      />
    </FormContainer>
  );
};

export default Form1;