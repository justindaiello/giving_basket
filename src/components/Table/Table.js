import React from 'react';
import { array, func } from 'prop-types';

import Button from '../Button';
import { formatCurrency } from '../../utils/functions';
import { StyledTable, StyledHeaderItem, StyledTableItem } from './Table.styled';

function Table({ headItems, data, handleModalOpen, sendCheck }) {
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
            <StyledTableItem>
              <span>{item.addressLine1}</span>
              <span>{`${item.city}, ${item.state} ${item.zipcode}`}</span>
            </StyledTableItem>
            <StyledTableItem>{formatCurrency(item.amount)}</StyledTableItem>
            <StyledTableItem className="hasBtn">
              <Button
                onClick={() => handleModalOpen(item)}
                disabled={item.isSent}
              >
                Edit
              </Button>
            </StyledTableItem>
            <StyledTableItem className="hasBtn">
              <Button onClick={() => sendCheck(item.id)} disabled={item.isSent}>
                {item.isSent ? 'Sent' : 'Send'}
              </Button>
            </StyledTableItem>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

Table.propTypes = {
  data: array,
  sendCheck: func,
  headItems: array,
  handleModalOpen: func,
};

export default Table;
