import React from 'react';
import {
  Form,
  Input,
  Row,
  Col
} from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import { StyledButton } from './styled';
import { IContactState } from '../../../../types/home';

const { TextArea } = Input;
const formItemLayout = {
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};

interface IProps {
  addContact(contact: IContactState): any,
}

const HomeForm: React.FC<IProps> = (props) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    props.addContact(values);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}
      >
        <Input prefix={<UserOutlined />} placeholder='Username' />
      </Form.Item>
      <Row justify="space-between">
        <Col span={11}>
          <Form.Item
            name="phone"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input style={{ width: '100%' }} placeholder="Phone" />
          </Form.Item>
        </Col>
        <Col span={11}>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name="address"
        rules={[{ required: true, message: 'Please input your address!', whitespace: true }]}
      >
        <TextArea placeholder='Address' />
      </Form.Item>
      <Form.Item>
        <StyledButton type="primary" htmlType="submit">
          Register
        </StyledButton>
      </Form.Item>
    </Form>
  );
};

export default HomeForm;