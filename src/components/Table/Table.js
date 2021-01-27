import React from 'react';
import { array, func } from 'prop-types';

import Button from '../Button';
import { StyledTable, StyledHeaderItem, StyledTableItem } from './Table.styled';

function Table({ headItems, data, setModalOpen }) {
  return (
    <StyledTable>
      <thead>
        <tr>
          {headItems.map((header) => (
            <StyledHeaderItem key={header}>{header}</StyledHeaderItem>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <StyledTableItem>{item.name}</StyledTableItem>
            <StyledTableItem>{item.address}</StyledTableItem>
            <StyledTableItem>{item.amount}</StyledTableItem>
            <StyledTableItem className="hasBtn">
              <Button onClick={() => setModalOpen(true)}>Edit</Button>
            </StyledTableItem>
            <StyledTableItem className="hasBtn">
              <Button>Send</Button>
            </StyledTableItem>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

Table.propTypes = {
  data: array,
  headItems: array,
  setModalOpen: func,
};

export default Table;
