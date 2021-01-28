import React from 'react';
import user from '@testing-library/user-event';

import CheckTable from '../CheckTable';
import { render } from '../../../utils/test-utils';

describe('<CheckTable />', () => {
  it('should render the correct title', () => {
    const { getByText } = render(<CheckTable />);
    expect(getByText(/giving basket checks/i)).toBeInTheDocument();
  });

  it('should have a default disabled previous page button', () => {
    const { getByLabelText } = render(<CheckTable />);
    expect(getByLabelText(/previous page/i)).toHaveAttribute('disabled');
  });

  it('should open the edit address modal', () => {
    const { getAllByRole, getAllByText } = render(<CheckTable />);
    user.click(getAllByRole('button', { name: /edit/i })[0]);
    expect(getAllByText(/update address/i)[0]).toBeInTheDocument();
  });
});
