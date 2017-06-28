/**
 * Created by root on 17-6-23.
 */

import React from 'react'
import {connect} from 'dva'
import {Tabs} from 'antd'
import {routerRedux} from 'dva/router'
import PropTypes from 'prop-types'
import List from './newUser'
import Filter from './Filter'

const Index = ({newUser, dispatch, location, loading}) => {
  const {listFiltered, pagination, sortedInfo, selectedRowKeys, filter} = newUser;
  const {query = {}, pathname} = location;

  const listProps = {
    scroll: true,
    pagination,
    dataSource: listFiltered,
    loading: loading.effects['newUser/query'],
    sortedInfo,
    selectedRowKeys,
    // onChange (page) {
    //   dispatch(routerRedux.push({
    //     pathname,
    //     query: {
    //       ...query,
    //       page: page.current,
    //       pageSize: page.pageSize,
    //     },
    //   }))
    // },
  }

  const filterProps = {
    filter: filter,
    onFilterChange (value) {
      dispatch(
        {type: 'newUser/filter', payload: {filter:value.text}}
      )
    },
  }

  return (<div className="content-inner">
    <Filter {...filterProps} />
    {/*<p>NewUser</p>*/}
    {/*<div>*/}
    {/*<a onClick={tryClick.bind(null)}>tryme</a>*/}
    {/*</div>*/}
    <List {...listProps}/>
  </div>)
};

Index.propTypes = {
  post: PropTypes.object,
  loading: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({newUser, loading}) => ({newUser, loading}))(Index)
