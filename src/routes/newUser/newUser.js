import React from 'react';
import { connect } from 'dva';
import { Table,Popconfirm } from 'antd'
import styles from './newUser.less';


const List = ({ ...tableProps }) => {

  console.log(tableProps)

  function deleteHandler(id) {

    console.log(id)
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="">{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Operation',
      key: 'operation',
      width: 150,
      fixed:'right',
      render: (text, {id}) => (
        <span className={styles.operation}>
          <a href="">Edit</a>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ]

  return (
    <div>
      <Table
        {...tableProps}
        bordered
        scroll={{ x: 1200 }}
        columns={columns}
        simple
        className={styles.table}
        rowKey={record => record.id}
      />
    </div>
  )
}

export default List
