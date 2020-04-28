import React from 'react';
import { Menu, Select } from 'antd';
import UserMenu  from '../../common/UserMenu';

import { MailOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { StyledMenu, StyledItemLanguages, StyledItemUserMenu } from './styled';

const { Option } = Select;

const Header: React.FC = () => (
  <StyledMenu mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1">
        <MailOutlined />
      </Menu.Item>
      <Menu.Item key="2">
      <ShoppingCartOutlined />
      </Menu.Item>
      <StyledItemLanguages key="3">
        <Select defaultValue="eng">
          <Option value="eng">ENG</Option>
          <Option value="vni">VN</Option>
        </Select>
      </StyledItemLanguages>
      <StyledItemUserMenu>
        <UserMenu name="Thoai Huynh" />
      </StyledItemUserMenu>
    </StyledMenu>
);

export default Header;