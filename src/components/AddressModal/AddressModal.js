import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { func, bool, object } from 'prop-types';

import Input from '../Input';
import Button from '../Button';
import { StyledModalForm, StyledFormGroup } from './AddressModal.styled';

function AddressModal({ modalOpen, setModalOpen, handleSubmit, editData }) {
  const [formData, setFormData] = useState({
    addressLine1: editData?.addressLine1 || '',
    city: editData?.city || '',
    state: editData?.state || '',
    zipcode: editData?.zipcode || '',
    id: editData?.id || '',
  });

  /**
   * Pipe input data into state
   * @param {Object} e - event object, destructured down to name and value
   */
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  return (
    <ReactModal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      appElement={document.getElementById('root')}
      className="addressModal"
    >
      <StyledModalForm
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(formData);
        }}
      >
        <h2>{`Update Address for ${editData?.name || ''}`}</h2>
        <StyledFormGroup>
          <label htmlFor="addressLine1">Address</label>
          <Input
            id="addressLine1"
            name="addressLine1"
            placeholder="Address"
            value={formData.addressLine1}
            onChange={handleChange}
            autoFocus
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <label htmlFor="city">City</label>
          <Input
            id="city"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <label htmlFor="state">State</label>
          <Input
            id="state"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <label htmlFor="zipcode">Zip Code</label>
          <Input
            id="zipcode"
            name="zipcode"
            placeholder="Zip Code"
            value={formData.zipcode}
            onChange={handleChange}
          />
        </StyledFormGroup>
        <div className="btnGroup">
          <Button type="button" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>
          <Button type="submit">Update</Button>
        </div>
      </StyledModalForm>
    </ReactModal>
  );
}

AddressModal.propTypes = {
  modalOpen: bool,
  editData: object,
  setModalOpen: func,
  handleSubmit: func,
};

export default AddressModal;
