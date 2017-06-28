import React from 'react'
import PropTypes from 'prop-types'
import {routerRedux} from 'dva/router'
import {connect} from 'dva'
import {Row, Col, Button, Popconfirm} from 'antd'
import List from './List'
import BasicTable from '../../components/BasicTable'
import Filter from './Filter'
import Modal from './Modal'
import {Link} from 'dva/router'
import styles from './List.less'
import DropOption from "../../components/DropOption/DropOption";

const Cluster = ({cluster, dispatch, location}) => {

  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      width: 64,
      className: styles.avatar,
      render: (text) => <img alt={'avatar'} width={24} src={text}/>,
    }, {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => <Link to={`user/${record.id}`}>{text}</Link>,
    }, {
      title: 'NickName',
      dataIndex: 'nickName',
      key: 'nickName',
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Gender',
      dataIndex: 'isMale',
      key: 'isMale',
      render: (text) => <span>{text
        ? 'Male'
        : 'Female'}</span>,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    }, {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: 'CreateTime',
      dataIndex: 'createTime',
      key: 'createTime',
    }, {
      title: 'Operation',
      key: 'operation',
      width: 100,
      render: (text, record) => {
        return <DropOption onMenuClick={e => handleMenuClick(record, e)}
                           menuOptions={[{key: '1', name: 'Update'}, {key: '2', name: 'Delete'}]}/>
      },
    },
  ]


  const filterProps = {
    isMotion:false,
    filter: {
      ...location.query,
    },
    onFilterChange (value) {
      dispatch(routerRedux.push({
        pathname: location.pathname,
        query: {
          ...value,
          page: 1,
          pageSize,
        },
      }))
    },
    onSearch (fieldsValue) {
      fieldsValue.keyword.length ? dispatch(routerRedux.push({
        pathname: '/user',
        query: {
          field: fieldsValue.field,
          keyword: fieldsValue.keyword,
        },
      })) : dispatch(routerRedux.push({
        pathname: '/user',
      }))
    },
    onAdd () {
      dispatch({
        type: 'user/showModal',
        payload: {
          modalType: 'create',
        },
      })
    },
    switchIsMotion () {
      dispatch({type: 'user/switchIsMotion'})
    },
  }

  let tableProps = {
    columns,
    dataSource: cluster.list,
    filterProps
  }

  return (
    <div className="content-inner">
      <BasicTable {...tableProps} />
    </div>
  )

}

Cluster.propTypes = {
  cluster: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

function mapStateToProps({cluster}) {
  return {
    cluster
  }
}

export default connect(mapStateToProps)(Cluster)


