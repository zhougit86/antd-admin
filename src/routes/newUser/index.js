/**
 * Created by root on 17-6-23.
 */

import React from 'react'
import { connect } from 'dva'
import { Tabs } from 'antd'
import { routerRedux } from 'dva/router'
import testtable from './newUser'




const Index = ({ newUser, dispatch, loading, location }) => {
  const { list, pagination } = newUser
  const { query = {}, pathname } = location

  const listProps = {
    pagination,
    dataSource: list,
    loading: loading.effects['newUser/query'],
    onChange (page) {
      dispatch(routerRedux.push({
        pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
        },
      }))
    },
  }



  return (<div className="content-inner">
    <testtable {...listProps} />
  </div>)
}



export default connect(({ newUser, loading }) => ({ newUser, loading }))(Index)
