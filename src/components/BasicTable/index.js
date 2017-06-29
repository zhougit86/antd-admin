import React from 'react'
import PropTypes from 'prop-types'
import {Table} from 'antd'
import styles from './List.less'
import classnames from 'classnames'
import Filter from './Filter'
import Pagination from './Pagination'

const BasicTable = ({isMotion, location, ...tableProps}) => {


  return (
    <div>
      <Filter {...tableProps.filterProps} />
      <Table
        {...tableProps}
        className={classnames({[styles.table]: true, [styles.motion]: isMotion})}
        bordered
        scroll={{x: 1000}}
        simple
        rowKey={record => record.id}
        // getBodyWrapper={getBodyWrapper}
      />
      {/*<Pagination/>*/}
    </div>
  )
}

BasicTable.propTypes = {
  // onDeleteItem: PropTypes.func,
  // onEditItem: PropTypes.func,
  // tableProps: PropTypes.object,
  isMotion: PropTypes.bool,
  location: PropTypes.object,
}

export default BasicTable
