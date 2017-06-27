/**
 * Created by root on 17-6-27.
 */


import modelExtend from 'dva-model-extend'
import {config} from '../utils'

const {pageSize} = config

const model = {
  reducers: {
    updateState (state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}

const pageFrontModel = modelExtend(model, {

  state: {
    list:[],
    listFrontPage:[],
    paginationFront:{
      pageSize: pageSize,
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `Total ${total} Items`,
      current: 1,
      total: 0,
    },
    sortedInfo: null,
    filteredInfo: null,
    selectedRowKeys: [],
  },

  reducers: {
    querySuccess (state, { payload }) {
      const { list,paginationFront } = payload
      return {
        ...state,
        list,
        listFrontPage:list.slice(0,pageSize),
        paginationFront: {
          ...state.paginationFront,
          ...paginationFront,
        },
        selectedRowKeys: [],
      }
    },
    jump(state, {payload: {page:current}}){
      return {
        ...state,
        listFrontPage:state.list.slice((current-1)*pageSize,current*pageSize),
        paginationFront: {
          ...state.paginationFront,
          current,
        },
      }

    }
  },

})


module.exports = {
  pageFrontModel,
}
