import React from 'react';
import { Alert } from 'antd';

const Banner: React.FC = () => {
  return (
    <Alert message="Success Text" type="success" banner/>
  )
}

export default Banner;