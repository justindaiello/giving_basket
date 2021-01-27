import React from 'react';
import ReactModal from 'react-modal';
import { func, bool } from 'prop-types';

import { StyledModalBody } from './AddressModal.styled';

function AddressModal({ modalOpen, setModalOpen }) {
  return (
    <ReactModal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      appElement={document.getElementById('root')}
      className="addressModal"
    >
      <StyledModalBody>
        <h2>Update Address</h2>
      </StyledModalBody>
    </ReactModal>
  );
}

AddressModal.propTypes = {
  modalOpen: bool,
  setModalOpen: func,
};

export default AddressModal;
