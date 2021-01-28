import React from 'react';
import ReactModal from 'react-modal';
import { render } from '@testing-library/react';

import AppProviders from '../context';

/**
 * Anchor react-modal to suppress console warnings
 */
ReactModal.setAppElement('*');

/**
 * Override React Testing Library's render method with this utility
 * This will also allow our styled components theme and modal context to get passed through
 * If we were using redux and react router we could add that context here as well
 */
function customRender(ui) {
  return {
    ...render(<AppProviders>{ui}</AppProviders>),
  };
}

export * from '@testing-library/react';

export { customRender as render };
