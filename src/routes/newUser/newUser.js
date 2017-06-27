import React from 'react';
import { connect } from 'dva';
import { Pagination,Table,Popconfirm } from 'antd';
import styles from './newUser.less';
import {config} from '../../utils';

const {pageSize} = config;


const List = ({ ...tableProps,total,current,PAGE_SIZE=pageSize,dispatch }) => {

  function deleteHandler(id) {
    console.log(id)
  }

  function pageChangeHandler(page) {
    dispatch({
      type: 'newUser/jump',
      payload: {page},
    });
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
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
  ];

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
      <Pagination
          className="ant-table-pagination"
          total={total}
          current={current}
          pageSize={PAGE_SIZE}
          onChange={pageChangeHandler}
      />
    </div>
  )
}

export default connect()(List)
