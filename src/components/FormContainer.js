import React from 'react';

const FormContainer = ({ title, children, onBack, onNext }) => {
  return (
    <div className="container">
      <h2>{title}</h2>
      <form>
        {children}
        <div className="mt-3">
          {onBack && (
            <button type="button" className="btn btn-secondary mr-2" onClick={onBack}>
              Назад
            </button>
          )}
          {onNext && (
            <button type="button" className="btn btn-primary" onClick={onNext}>
              Далее
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormContainer;
