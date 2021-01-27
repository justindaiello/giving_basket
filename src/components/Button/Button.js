import styled from 'styled-components';
import { darken } from 'polished';

const Button = styled.button`
  /* positioning */
  display: block;
  width: 100%;
  position: relative;

  /* box-model */
  border: none;
  padding: 0.5rem 1.75rem;
  border-radius: ${({ theme }) => theme.borderRadius};

  /* typography */
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontSizeLg};

  /* visual */
  cursor: pointer;
  background: ${({ theme }) => theme.primary};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover,
  &:active {
    /* visual */
    background: ${({ theme }) => darken(0.1, theme.primary)};
  }

  &:after {
    /* visual */
    content: '';
    background-color: transparent;
    transition: border 0.2s;

    /* positioning */
    position: absolute;
    top: -6px;
    right: -6px;
    bottom: -6px;
    left: -6px;

    /* box-model */
    border: 2 px solid transparent;
    border-radius: 100px;
  }

  &:focus {
    /* box-model */
    outline: none;

    &:after {
      /* visual */
      border-color: ${({ theme }) => theme.primary};
    }
  }
`;

export default Button;
