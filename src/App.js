import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form1 from './pages/Form1';
import Form2 from './pages/Form2';
import Form3 from './pages/Form3';
import { AppProvider } from './AppContext';

const App = () => {
  const [formData, setFormData] = useState({
    phone: '',
    firstName: '',
    lastName: '',
    gender: '',
    workPlace: '',
    address: '',
    loanAmount: 200,
    loanTerm: 10,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSliderChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };


  return (
    <AppProvider>
    <Router>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="mt-5 w-75">
          <Routes>
            <Route 
              path="/" 
              element={<Form1 formData={formData} handleChange={handleChange} />} 
            />
            <Route 
              path="/form2" 
              element={<Form2 formData={formData} handleChange={handleChange} />} 
            />
            <Route 
              path="/form3" 
              element={
                <Form3 
                  formData={formData} 
                  handleSliderChange={handleSliderChange} 
                />
              } 
            />
          </Routes>
        </div>
      </div>
    </Router>
    </AppProvider>
  );
};

export default App;