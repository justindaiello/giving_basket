import React from 'react';
import ReactModal from 'react-modal';
import { func, bool } from 'prop-types';

import Input from '../Input';
import Button from '../Button';
import { StyledModalBody, StyledFormGroup } from './AddressModal.styled';

function AddressModal({ modalOpen, setModalOpen, submit }) {
  return (
    <ReactModal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      appElement={document.getElementById('root')}
      className="addressModal"
    >
      <StyledModalBody>
        <h2>Update Address</h2>
        <StyledFormGroup>
          <label htmlFor="addressLine1">Address</label>
          <Input id="addressLine1" name="addressLine1" placeholder="Address" />
        </StyledFormGroup>
        <StyledFormGroup>
          <label htmlFor="city">City</label>
          <Input id="city" name="city" placeholder="City" />
        </StyledFormGroup>
        <StyledFormGroup>
          <label htmlFor="state">State</label>
          <Input id="state" name="state" placeholder="State" />
        </StyledFormGroup>
        <StyledFormGroup>
          <label htmlFor="zipCode">Zip Code</label>
          <Input id="zipCode" name="zipCode" placeholder="Zip Code" />
        </StyledFormGroup>
        <div className="btnGroup">
          <Button type="button" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>
          <Button type="submit">Update</Button>
        </div>
      </StyledModalBody>
    </ReactModal>
  );
}

AddressModal.propTypes = {
  submit: func,
  modalOpen: bool,
  setModalOpen: func,
};

export default AddressModal;
