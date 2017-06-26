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

const pageModel = modelExtend(model, {

  state: {
    list: [],
    listFrontPage:[],
    pagination: {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `Total ${total} Items`,
      current: 1,
      total: 0,
    },
    paginationFront:{
      current: 1,
      total: 0,
    }
  },

  reducers: {
    querySuccess (state, { payload }) {
      const { list, pagination,paginationFront } = payload
      return {
        ...state,
        list,
        listFrontPage:list.slice(0,pageSize),
        pagination: {
          ...state.pagination,
          ...pagination,
        },
        paginationFront: {
          ...state.paginationFront,
          ...paginationFront,
        },
      }
    },
  },

})


module.exports = {
  model,
  pageModel,
}
