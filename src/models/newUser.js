import modelExtend from 'dva-model-extend'
import {query} from '../services/newUser'
import {pageModel} from './common'
import {config} from '../utils'

const {pageSize} = config

export default modelExtend(pageModel, {

  namespace: 'newUser',

  reducers:{
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

  subscriptions: {
    setup ({dispatch, history}) {
      history.listen(location => {
        if (location.pathname === '/newUser') {

          dispatch({
            type: 'query', payload: {
              // status: 2,
              ...location.query,
            }
          })
        }
      })
    },
  },

  effects: {
    *query ({payload,}, {call, put, select}) {
      // throw new Error('haha')
      const data = yield call(query, payload)
      if (data.success) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.pageSize) || 10,
              total: Number(data.total) || 10,
            },
            paginationFront: {
              current: 1,
              total: Number(data.data.length) ,
              pageSize: pageSize,
            },
          },
        })
      } else {
        throw data
      }
    },
  },
})
