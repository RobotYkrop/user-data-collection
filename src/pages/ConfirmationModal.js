import React from 'react';
import { useAppContext } from '../AppContext';

const ConfirmationModal = ({showModal, closeModal}) => {
  const { formData } = useAppContext();
  return (
    <>
      <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Подтверждение</h5>
            </div>
            <div className="modal-body">
              Поздравляем, {formData.firstName} {formData.lastName}. Вам одобрена ${formData.loanAmount} на {formData.loanTerm} дней.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={closeModal}>Закрыть</button>
            </div>
          </div>
        </div>
      </div>
      {showModal && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default ConfirmationModal;