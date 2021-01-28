import React, { useState } from 'react';
import { isEmpty } from 'ramda';
import { toast } from 'react-toastify';

import Table from '../../components/Table';
import { validateData } from '../../utils/functions';
import AddressModal from '../../components/AddressModal';
import { testTableData, testTableDataAlt } from '../../utils/test-data';
import {
  StyledTableWrapper,
  StyledButtonGroup,
  StyledPageButton,
} from './CheckTable.styled';

export const tableHeadings = [
  'Nonprofit Name',
  'Mailing Address',
  'Amount USD',
  'Edit',
  'Send',
];

function CheckTable() {
  const [modalOpen, setModalOpen] = useState(false);
  const [checkData, setCheckData] = useState(testTableData);
  const [editData, setEditData] = useState({});
  const [errors, setErrors] = useState({});

  /**
   * Update check status to sent & render toast message
   * @param {number} id - unique identifer for check entry
   */
  function sendCheck(id) {
    let updated = checkData.data.map((item) =>
      item.id === id ? { ...item, isSent: true } : item,
    );

    setCheckData((prevState) => {
      return { ...prevState, data: updated };
    });
    return toast.info('Check successfully sent');
  }

  /**
   * Open modal & set current table row data into state
   * @param {Object} data - table row data
   */
  function handleModalOpen(data) {
    setErrors({});
    setEditData(data);
    return setModalOpen(true);
  }

  /**
   * Edit address from form data
   * @param {Object} formData - updated form data
   */
  function handleSubmit(formData) {
    const validation = validateData(formData, setErrors);

    if (isEmpty(validation)) {
      let updated = checkData.data.map((item) =>
        item.id === formData.id ? { ...item, ...formData } : item,
      );

      setModalOpen(false);
      setCheckData((prevState) => {
        return { ...prevState, data: updated };
      });
      return toast.info('Address successfully edited');
    }
  }

  /**
   * Mock pagination to next page
   */
  function next() {
    if (checkData.next) setCheckData(testTableDataAlt);
  }

  /**
   * Mock pagination to previous page
   */
  function previous() {
    if (checkData.prev) setCheckData(testTableData);
  }

  return (
    <React.Fragment>
      <StyledTableWrapper>
        <h1 className="tableTitle">Giving Basket Checks</h1>
        <p className="pageInfo">Page {!checkData.prev ? 1 : 2} of 2</p>
        <Table
          data={checkData.data}
          sendCheck={sendCheck}
          headItems={tableHeadings}
          handleModalOpen={handleModalOpen}
        />
        <StyledButtonGroup>
          <StyledPageButton
            aria-label="previous page"
            onClick={previous}
            disabled={!checkData.prev}
          >
            &larr;
          </StyledPageButton>
          <StyledPageButton
            aria-label="next page"
            onClick={next}
            disabled={!checkData.next}
          >
            &rarr;
          </StyledPageButton>
        </StyledButtonGroup>
      </StyledTableWrapper>
      {modalOpen && (
        <AddressModal
          errors={errors}
          editData={editData}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          handleSubmit={handleSubmit}
        />
      )}
    </React.Fragment>
  );
}

export default CheckTable;
