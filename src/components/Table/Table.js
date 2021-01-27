import React from 'react';
import { array } from 'prop-types';

import Button from '../Button';
import { StyledTable, StyledHeaderItem, StyledTableItem } from './Table.styled';

function Table({ headItems, data }) {
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
              <Button>Edit</Button>
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
};

export default Table;
