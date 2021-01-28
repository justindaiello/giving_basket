import styled from 'styled-components';

const Input = styled.input`
  /* box-model */
  width: 100%;
  height: 40px;
  padding: 0.375rem;
  border: 1px solid;
  border-radius: ${({ theme }) => theme.borderRadiusSm};
  border-color: ${({ theme, error }) =>
    error ? theme.danger : theme.inactive};

  /* positioning */
  display: block;

  /* visual */
  color: ${({ theme }) => theme.black};
  background: ${({ theme }) => theme.white};
  transition: border-color 0.2s ease-in-out;

  /* typography */
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizeLg};

  &::placeholder {
    /* visual */
    color: ${({ theme }) => theme.inactive};
    opacity: 1; /* Override Firefox's unusual default opacity; */
  }

  &:focus {
    /* box-model */
    border-color: ${({ theme }) => theme.primary};
    outline: 0;
  }
`;

export default Input;
