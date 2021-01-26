import React from 'react';
import { element } from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyle.styled';

/**
 * @description
 * App provider component wraps the app in important context
 * Here we're wrapping the app with context for Styled Components & injecting out global styling
 * This is also where we can add a redux store provider or react router browser router
 */
function AppProviders({ children }) {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </React.Fragment>
  );
}

AppProviders.propTypes = {
  children: element.isRequired,
};

export default AppProviders;
