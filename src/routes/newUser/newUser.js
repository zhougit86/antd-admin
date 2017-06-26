import React from 'react';
import { connect } from 'dva';
import { Table } from 'antd'
import styles from './newUser.less';



// const testtable = ({ ...tableProps }) => {
//   const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//       render: text => <a href="">{text}</a>,
//     },
//     {
//       title: 'Email',
//       dataIndex: 'email',
//       key: 'email',
//     },
//     {
//       title: 'Website',
//       dataIndex: 'website',
//       key: 'website',
//     },
//     {
//       "title": 'Phone',
//       "dataIndex": 'phone',
//       "key": 'phone',
//     },
//     {
//       title: 'Operation',
//       key: 'operation',
//       render: (text, {id}) => (
//         <span className={styles.operation}>
//           <a href="">Edit</a>
//           <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, id)}>
//             <a href="">Delete</a>
//           </Popconfirm>
//         </span>
//       ),
//     },
//   ];
//
//   return (
//     <div>
//       <Table
//         {...tableProps}
//         bordered
//         scroll={{ x: 1200 }}
//         columns={columns}
//         simple
//         className={styles.table}
//         rowKey={record => record.id}
//       />
//     </div>
//   )
// }

const header = ({data}) =>{

  return (
    <div>
      <p>=======</p>
      <span>{data}</span>
    </div>
  )
};

export default header
