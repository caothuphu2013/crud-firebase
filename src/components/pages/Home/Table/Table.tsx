import React, { useEffect } from 'react';
import { Table, Button } from 'antd';
import { getData } from './config';
import { IHomeState, IContactState } from '../../../../types/home';

export const getColumns = (deleteContact: (id: string) => any) => [
  {
    title: "User name",
    dataIndex: "username",
    key: "username",
    render: (name: string) => <Button type="link">{name}</Button>
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Action",
    key: "action",
    render: (_:string, record: IContactState) => {
      return (
        <span>
          <Button type="link">Edit</Button>
          <Button type="link" onClick={() => deleteContact(record.id)}>Delete</Button>
        </span>
      )
    }
  },
];

const HomeTable: React.FC<IProps> = (props) => {
  const { contacts, isFetching, deleteContact } = props;


  useEffect(() => {
    props.fetchContacts();
  }, []);

  return (
    <Table
      columns={getColumns(deleteContact)}
      dataSource={getData(contacts)}
      loading={isFetching}
    />
  );
}

// export default React.memo(HomeTable, function (prevProps: IHomeState, nextProps: IHomeState) : boolean {
//   if (prevProps.contacts === nextProps.contacts && prevProps.isFetching === nextProps.isFetching)
//     return true;
//   return false;
// });

export default HomeTable;

interface IProps extends IHomeState {
  fetchContacts(): any,
  deleteContact(id: string): any
}
