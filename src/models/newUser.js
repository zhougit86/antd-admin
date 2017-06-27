import modelExtend from 'dva-model-extend'
import {query} from '../services/newUser'
import {pageFrontModel} from './commonFrontPage'

export default modelExtend(pageFrontModel, {

  namespace: 'newUser',

  reducers:{
    change(state, { payload }){
      return {
        ...state,
        sortedInfo: payload.sorter,
        filteredInfo: payload.filters,
      }
    }
  },

  subscriptions: {
    setup ({dispatch, history}) {
      history.listen(location => {
        if (location.pathname === '/newUser') {
          dispatch({
            type: 'query', payload: {}
          })
        }
      })
    },
  },

  effects: {
    *query ({payload,}, {call, put}) {
      // throw new Error('haha')
      const data = yield call(query, payload)
      if (data.success) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            // pagination: {
            //   current: Number(payload.page) || 1,
            //   pageSize: Number(payload.pageSize) || 10,
            //   total: Number(data.total) || 10,
            // },
            paginationFront: {
              current: 1,
              total: Number(data.data.length) ,
            },
          },
        })
      } else {
        throw data
      }
    },
  },
})
