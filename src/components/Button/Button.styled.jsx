import styled from 'styled-components';

export const StyledButton = styled.button`
  min-width: 80px;
  max-width: 50%;
  font-size: 14px;
  padding: 4px;
  border: 1px solid;
  border-radius: 3px;
  background-color: #07c;
  color: #fff;
  cursor: pointer;
  :hover {
    background-color: #05a;
  }
`;

export const StyledDeleteButton = styled.button`
  display: inline-block;
  min-width: 24px;
  max-width: 24px;
  height: 24px;
  font-size: 12px;
  padding: 4px;
  border: 1px solid;
  border-radius: 3px;
  background-color: #07c;
  color: #fff;
  cursor: pointer;
  :hover {
    background-color: red;
  }
`;
