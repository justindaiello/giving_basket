import { isEmpty } from 'ramda';

/**
 * Convert base 10 currency value to USD format
 * @param {number} val - base 10 currency val
 * @returns {string} parsed and formatted value
 */
export function formatCurrency(val) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(val / 100);
}

/**
 * Check for empty form fields
 * @param {Object} data - form data
 * @param {Function} setState - setState callback to pipe error status into state
 */
export function validateData(data, setState) {
  let errorObj = {};

  Object.entries(data).forEach(([name, value]) => {
    if (!value && name !== 'id') errorObj[name] = true;
  });

  if (!isEmpty(errorObj)) setState(errorObj);

  return errorObj;
}
