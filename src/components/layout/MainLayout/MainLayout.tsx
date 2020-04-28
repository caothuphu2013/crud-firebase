import React from 'react';

import { Layout } from 'antd';
import Header from '../Header';
import { StyledLayoutHeader } from './styled';

const MainLayout: React.FC = ({ children }) => {
  return (
    <Layout>
      <StyledLayoutHeader>
        <Header />
      </StyledLayoutHeader>
      <Layout.Content>
        { children }
      </Layout.Content>
    </Layout>
  )
}

export default MainLayout