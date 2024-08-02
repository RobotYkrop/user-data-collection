import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import RangeInput from '../components/RangeInput';
import { useAppContext } from '../AppContext';
import ConfirmationModal from './ConfirmationModal';
import axios from 'axios';

const Form3 = () => {
  const navigate = useNavigate();
  const { formData, handleSliderChange } = useAppContext();
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://dummyjson.com/products/add', {
        title: `${formData.firstName} ${formData.lastName}`
      });
      if (response.status === 201) {
        setShowModal(true);
      }
    } catch (error) {
      console.error('Failed to submit the form', error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };
  
  return (
    <FormContainer
      title="Параметры займа"
      onBack={() => navigate(-1)}
      onNext={handleSubmit}
    >
      <RangeInput
        id="loanAmount"
        label={`Сумма займа ${formData.loanAmount}$`}
        min="200"
        max="1000"
        step="100"
        value={formData.loanAmount}
        onChange={(e) => handleSliderChange('loanAmount', e.target.value)}
      />
      <RangeInput
        id="loanTerm"
        label={`Срок займа ${formData.loanTerm}`}
        min="10"
        max="30"
        step="1"
        value={formData.loanTerm}
        onChange={(e) => handleSliderChange('loanTerm', e.target.value)}
      />
      <ConfirmationModal showModal={showModal} closeModal={closeModal} />
    </FormContainer>
  );
};

export default Form3;
