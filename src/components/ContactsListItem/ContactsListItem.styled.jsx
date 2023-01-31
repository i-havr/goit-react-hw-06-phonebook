import styled from 'styled-components';

export const ContactsListItemStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  max-width: 100%
  padding-right: 20px;
  color: #07c;
  &::before {
    content: '';
    width: 10px;
    height: 8px;
    margin-right: 10px;
    border-radius: 50%;
    background-color: #07c;
  }
`;

export const InnerElementStyled = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 20px;
  color: black;
`;
