import modelExtend from 'dva-model-extend'
import {query} from '../services/newUser'
import {pageModel} from './common'

export default modelExtend(pageModel, {

  namespace: 'newUser',

  subscriptions: {
    setup ({dispatch, history}) {
      history.listen(location => {
        if (location.pathname === '/newUser') {
          // console.log({
          //   status: 2,
          //   ...location.query,
          // })
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
      // console.log(data);
      if (data.success) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.pageSize) || 10,
              total: data.total,
            },
          },
        })
        const list = yield select(state => state.newUser);
        console.log(list)
      } else {
        throw data
      }
    },
  },
})
