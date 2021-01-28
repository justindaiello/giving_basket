import React from 'react';

import Input from '../Input';
import { render } from '../../../utils/test-utils';

describe('<Input />', () => {
  it('should display an error border', () => {
    const { getByAltText } = render(<Input error={true} alt="testInput" />);
    expect(getByAltText(/testInput/i)).toHaveStyle('borderColor: #a62622');
  });
});
