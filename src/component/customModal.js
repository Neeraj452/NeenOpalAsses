import React, { useEffect, useState } from 'react';

const CustomModal = ({ isOpen, onClose, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };
useEffect(() => {

    setIsModalOpen(isOpen);
    },[isOpen])


  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
        <div className='ant-modal-title'>Basic Modal</div>
          <button className="close-button" onClick={closeModal}>
            &times;
          </button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default CustomModal;
