import React from 'react';
import {connect} from 'dva';
import {Table, Popconfirm} from 'antd';
import styles from './Object.less';


const List = ({...tableProps, dispatch, sortedInfo, selectedRowKeys}) => {

  sortedInfo = sortedInfo || {};
  const hasSelected = selectedRowKeys.length > 0;
  // filteredInfo = filteredInfo || {};

  function deleteHandler(id) {
    console.log(id)
  }

  function handleChange(pagination, filters, sorter) {
    // console.log('Various parameters', pagination, filters, sorter);
    dispatch({
        type: 'Object/change',
        payload: {pagination, filters, sorter}
      }
    )
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys, selectedRows) => {
      // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      dispatch({
          type: 'Object/updateState',
          payload: {selectedRowKeys}
        }
      )
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Leanne Graham',    // Column configuration not to be checked
    }),
  };


  const columns = [
    // {
    //   title: 'ID',
    //   dataIndex: 'id',
    //   key: 'id',
    //   sorter: (a, b) => a.id - b.id,
    //   sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,
    // },
    {
      title: 'ServiceName',
      dataIndex: 'ServiceName',
      key: 'ServiceName',
      // render: text => <a href="">{text}</a>,
    },
    {
      title: 'ObjectName',
      dataIndex: 'ObjectName',
      key: 'ObjectName',
      render: text => <a href="">{text}</a>,
    },
    {
      title: 'ObjectType',
      dataIndex: 'ObjectType',
      key: 'ObjectType',
    },

    {
      title: 'MinNum',
      dataIndex: 'MinNum',
      key: 'MinNum',
    },

    {
      title: 'MaxNum',
      dataIndex: 'MaxNum',
      key: 'MaxNum',
    },

    {
      title: 'SupportOps',
      dataIndex: 'SupportOps',
      key: 'SupportOps',
    },

    {
      title: 'OpsWithScript',
      dataIndex: 'OpsWithScript',
      key: 'OpsWithScript',
    },

    {
      title: 'AdmVisible',
      dataIndex: 'AdmVisible',
      key: 'AdmVisible',
    },

    {
      title: 'EngName',
      dataIndex: 'EngName',
      key: 'EngName',
    },

    {
      title: 'ChnName',
      dataIndex: 'ChnName',
      key: 'ChnName',
    },


    {
      title: 'Operation',
      key: 'operation',
      width: 150,
      fixed: 'right',
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
        scroll={{x: 1200}}
        columns={columns}
        simple
        className={styles.table}
        rowKey={record => record.id}
        onChange={handleChange}
        rowSelection={rowSelection}
      />

    </div>

  )
}

export default connect()(List)
