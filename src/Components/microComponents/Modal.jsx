import React from 'react';
import Modal from 'react-modal';
import "../../Whole.css";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    fontFamily: 'sans-serif',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    position: 'relative',
  },
};

const Modals = ({ modalIsOpen, setIsOpen, short, Paid, name, rat }) => {
  let subtitle;

  function afterOpenModal() {
    subtitle.style.color = '#333';
    subtitle.style.fontSize = '24px';
    subtitle.style.marginBottom = '10px';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Tool Details Modal"
      >
        <button
          onClick={closeModal}
          style={{
            position: 'absolute',
            top: '10px',
            right: '15px',
            background: 'transparent',
            border: 'none',
            fontSize: '18px',
            cursor: 'pointer',
            color: '#888'
          }}
        >
          ✖
        </button>

        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{name}</h2>

        <div style={{ marginBottom: '12px', lineHeight: '1.6' }}>
          <strong>Description:</strong>
          <p>{short}</p>
        </div>

        <div style={{ marginBottom: '8px' }}>
          <strong>Pricing:</strong> ₹{Paid}
        </div>

        <div>
          <strong>Rating:</strong> {rat} ⭐
        </div>
      </Modal>
    </>
  );
};

export default Modals;
