import styled from 'styled-components';
import { Avatar, Menu } from 'antd';

export const StyledDropdownMenu = styled(Menu)`
  border-right-width: 0;
  padding: 0;
`;

export const StyledAvatar = styled(Avatar)`
  background-color: transparent;
  border: 1px solid black;
  cursor: pointer;
  color: black;
  margin-right: 2px;

  :hover {
    background-color: #002433;
    color: white;
  }

  .anticon-user {
    margin-right: 0;
  }
`;