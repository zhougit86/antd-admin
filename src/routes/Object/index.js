/**
 * Created by root on 17-6-23.
 */

import React from 'react'
import {connect} from 'dva'
import {Tabs} from 'antd'
import {routerRedux} from 'dva/router'
import PropTypes from 'prop-types'
import List from './Object'
import Filter from './Filter'
import Modal from './Modal'

const Index = ({Object, dispatch, location, loading}) => {
  const {listFiltered, pagination, sortedInfo, filter,modalVisible,modalType} = Object;
  let {selectedRowKeys} =Object;
  const hasSelected = selectedRowKeys.length > 0;

  const listProps = {
    scroll: true,
    pagination,
    dataSource: listFiltered,
    loading: loading.effects['Object/query'],
    sortedInfo,
    selectedRowKeys,
  }

  const refresh =() =>{
    dispatch({
      type: 'Object/query', payload: {}
    })
    selectedRowKeys = [];
  }

  const filterProps = {
    loading: loading.effects['Object/query'],
    filter: filter,
    hasSelected,
    selectedRowKeys,
    onFilterChange (value) {
      dispatch(
        {type: 'Object/filter', payload: {filter:value.text}}
      )
    },
    onAdd(){
      dispatch({
        type: 'Object/showModal',
        payload: {
          modalType: 'create',
        },
      })
    },
    refresh
  };

  const modalProps = {
    item: modalType === 'create' ? {} : currentItem,
    visible: modalVisible,
    maskClosable: false,

    confirmLoading: loading.effects['Object/update'],
    title: "Create Object",

    wrapClassName: 'vertical-center-modal',
    onOk (data) {
      dispatch({
        type: `Object/${modalType}`,
        payload: data,
      })
    },
    onCancel () {
      dispatch({
        type: 'Object/hideModal',
      })
    },
  };

  return (<div className="content-inner">
    <Filter {...filterProps} />
    <List {...listProps}/>
    {modalVisible && <Modal {...modalProps} />}
  </div>)
};

Index.propTypes = {
  post: PropTypes.object,
  loading: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({Object, loading}) => ({Object, loading}))(Index)
