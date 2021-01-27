import React, { useState } from 'react';
import { toast } from 'react-toastify';

import Table from '../../components/Table';
import { testTableData } from '../../utils/test-data';
import AddressModal from '../../components/AddressModal';
import { StyledTableWrapper } from './CheckTable.styled';

const tableHeadings = [
  'Nonprofit Name',
  'Mailing Address',
  'Amount USD',
  'Edit',
  'Send',
];

function CheckTable() {
  const [modalOpen, setModalOpen] = useState(false);
  const [checkData, setCheckData] = useState([...testTableData]);
  const [editData, setEditData] = useState({});

  /**
   * Update check status to sent & render toast message
   * @param {number} id - unique identifer for check entry
   */
  function sendCheck(id) {
    let updated = checkData.map((item) =>
      item.id === id ? { ...item, isSent: true } : item,
    );

    setCheckData(updated);
    return toast.info('Check successfully sent');
  }

  /**
   * Open modal & set current table row data into state
   * @param {Object} data - table row data
   */
  function handleModalOpen(data) {
    setEditData(data);
    return setModalOpen(true);
  }

  /**
   * Edit address from form data
   * @param {Object} formData - updated form data
   */
  function handleSubmit(formData) {
    let updated = checkData.map((item) =>
      item.id === formData.id ? { ...item, ...formData } : item,
    );

    setCheckData(updated);
    setModalOpen(false);
    return toast.info('Address successfully edited');
  }

  return (
    <React.Fragment>
      <StyledTableWrapper>
        <h1 className="tableTitle">Giving Basket Checks</h1>
        <Table
          data={checkData}
          sendCheck={sendCheck}
          headItems={tableHeadings}
          handleModalOpen={handleModalOpen}
        />
      </StyledTableWrapper>
      {modalOpen && (
        <AddressModal
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
