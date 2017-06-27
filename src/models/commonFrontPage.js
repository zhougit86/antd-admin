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
    pagination:{
      pageSize: pageSize,
      showSizeChanger: true,
      showQuickJumper: true,
      pageSizeOptions: ["3","4","5","6"],
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
      const { list,pagination } = payload
      return {
        ...state,
        list,

        pagination: {
          ...state.pagination,
          ...pagination,
        },
        selectedRowKeys: [],
      }
    },
    change(state, { payload }){
      return {
        ...state,
        pagination: payload.pagination,
        sortedInfo: payload.sorter,
        filteredInfo: payload.filters,
      }
    }
  },

})


module.exports = {
  pageFrontModel,
}
