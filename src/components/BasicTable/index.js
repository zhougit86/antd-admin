import React from 'react'
import PropTypes from 'prop-types'
import { Table, Modal } from 'antd'
import styles from './List.less'
import classnames from 'classnames'
import Filter from './Filter'
import AnimTableBody from '../DataTable/AnimTableBody'
import DropOption from '../DropOption/DropOption'
import { Link } from 'dva/router'

const confirm = Modal.confirm

const BasicTable = ({ onDeleteItem, onEditItem, isMotion, location, ...tableProps }) => {
  // const handleMenuClick = (record, e) => {
  //   if (e.key === '1') {
  //     onEditItem(record)
  //   } else if (e.key === '2') {
  //     confirm({
  //       title: 'Are you sure delete this record?',
  //       onOk () {
  //         onDeleteItem(record.id)
  //       },
  //     })
  //   }
  // }
  //

  //
  // const getBodyWrapperProps = {
  //   page: location.query.page,
  //   current: tableProps.pagination.current,
  // }
  //
  // const getBodyWrapper = body => { return isMotion ? <AnimTableBody {...getBodyWrapperProps} body={body} /> : body }
  console.log(tableProps)
  return (
    <div>
      <Filter {...tableProps.filterProps} />
      <Table
        {...tableProps}
        className={classnames({ [styles.table]: true, [styles.motion]: isMotion })}
        bordered
        scroll={{ x: 1000 }}
        simple
        rowKey={record => record.id}
        // getBodyWrapper={getBodyWrapper}
      />
    </div>
  )
}

BasicTable.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  isMotion: PropTypes.bool,
  location: PropTypes.object,
}

export default BasicTable
