import React from 'react';

import Table from '../../components/Table';
import { testTableData } from '../../utils/test-data';
import { StyledTableWrapper } from './CheckTable.styled';

const tableHeadings = [
  'Nonprofit Name',
  'Mailing Address',
  'Amount USD',
  'Edit',
  'Send',
];

function CheckTable() {
  return (
    <StyledTableWrapper>
      <h1 className="tableTitle">Giving Basket Checks</h1>
      <Table headItems={tableHeadings} data={testTableData} />
    </StyledTableWrapper>
  );
}

export default CheckTable;
