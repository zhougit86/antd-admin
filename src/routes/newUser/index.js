/**
 * Created by root on 17-6-23.
 */

import React from 'react'
import { connect } from 'dva'
import { Tabs } from 'antd'
import { routerRedux } from 'dva/router'
import header from './newUser'



const Index = ({newUser,dispatch, location, loading})=>{
  const {pagination} = newUser;
  const page = 1;

  function tryClick(id) {

    console.log(id)
  }

  return (<div className="content-inner">
    <header />
    <p>NewUser{pagination.pageSize}</p>
    <div>
      <a onClick={tryClick.bind(null,pagination.pageSize)}>tryme</a>
    </div>
  </div>)
}


export default connect(({newUser,loading})=>({newUser,loading}))(Index)