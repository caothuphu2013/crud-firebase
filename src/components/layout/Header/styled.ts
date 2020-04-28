import { Menu } from 'antd';
import styled from 'styled-components';

export const StyledMenu = styled(Menu)`
  float: right;
  line-height: 62px;

  .ant-menu-item {
    padding: 0 25px;
    border: 1px #e8e8e8 solid;

    .anticon {
      margin-right: 0;
    }
  }
`;

export const StyledItemLanguages = styled(Menu.Item)`
  padding: 0;
  
  .ant-select {
    width: 90px;
  }

  .ant-select-selection {
    border: none;
  }
`;

export const StyledItemUserMenu = styled(Menu.Item)`
  padding: 0 20px;
`