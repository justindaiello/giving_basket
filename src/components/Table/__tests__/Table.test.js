import React from 'react';

import Table from '../Table';
import { render } from '../../../utils/test-utils';
import { jestTableData } from '../../../utils/test-data';
import { tableHeadings } from '../../../modules/CheckTable';

const props = {
  sendCheck: jest.fn(),
  handleModalOpen: jest.fn(),
  headItems: tableHeadings,
  data: jestTableData.data,
};

describe('<Table />', () => {
  it('should render the correct table headings', () => {
    const { getByText, getAllByText } = render(<Table {...props} />);
    expect(getByText(/nonprofit name/i)).toBeInTheDocument();
    expect(getByText(/mailing address/i)).toBeInTheDocument();
    expect(getByText(/amount usd/i)).toBeInTheDocument();
    expect(getAllByText(/edit/i)[0]).toBeInTheDocument();
    expect(getAllByText(/send/i)[0]).toBeInTheDocument();
  });

  it('should disable buttons when a check is sent', () => {
    const { getByRole } = render(<Table {...props} />);
    expect(getByRole('button', { name: /sent/i })).toHaveAttribute('disabled');
  });
});
