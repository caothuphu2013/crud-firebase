import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Menu, Dropdown, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { StyledAvatar, StyledDropdownMenu } from './styled';

export interface IProps extends RouteComponentProps<any> {
  name: string,
  avatarSrc?: string
}

const UserMenu: React.FC<IProps> = ({ name, history, avatarSrc, ...restProps }) => (
  <Dropdown
    {...restProps}
    trigger={['click']}
    overlay={
      <StyledDropdownMenu>
        <Menu.Item>{name}</Menu.Item>
        <Menu.Item onClick={() => history.push('/logout')}>Logout</Menu.Item>
      </StyledDropdownMenu>
    }
    placement="bottomRight"
  >
    <StyledAvatar icon={<UserOutlined />} src={avatarSrc} />
  </Dropdown>
);

UserMenu.defaultProps = {
  avatarSrc: ''
}

export default withRouter(UserMenu);