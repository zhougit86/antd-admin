/**
 * Created by root on 17-6-23.
 */

import React from 'react'
import { connect } from 'dva'
import { Tabs } from 'antd'
import { routerRedux } from 'dva/router'
import List from './newUser'



const Index = ({newUser,dispatch, location, loading})=>{
  const {pagination,list} = newUser;
  const { query = {}, pathname } = location;
  // const para = {data:1};

  function tryClick(id) {

    console.log(id)
  }



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

    <p>NewUser{pagination.pageSize}</p>
    <div>
      <a onClick={tryClick.bind(null,pagination.pageSize)}>tryme</a>
    </div>
    <List {...listProps}/>
  </div>)
}


export default connect(({newUser,loading})=>({newUser,loading}))(Index)
