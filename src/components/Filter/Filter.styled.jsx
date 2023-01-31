import styled from 'styled-components';

export const LabelFilterStyled = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: bold;
  width: 80%;
  min-width: 80px;
  margin-right: auto;
  margin-left: auto;
  & > input {
    border: 1px solid black;
    border-radius: 3px;
    padding: 4px;
  }
`;

export const InputFilterStyled = styled.input`
  width: 97%;
`;
