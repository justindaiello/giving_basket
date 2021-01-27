import React, { useState } from 'react';

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

  return (
    <React.Fragment>
      <StyledTableWrapper>
        <h1 className="tableTitle">Giving Basket Checks</h1>
        <Table
          data={testTableData}
          headItems={tableHeadings}
          setModalOpen={setModalOpen}
        />
      </StyledTableWrapper>
      {modalOpen && (
        <AddressModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
    </React.Fragment>
  );
}

export default CheckTable;
