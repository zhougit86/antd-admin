import modelExtend from 'dva-model-extend'
import { query, auth, create } from '../services/Object'
import { pageFrontModel } from './commonFrontPage'

export default modelExtend(pageFrontModel, {

  namespace: 'Object',

  reducers: {
    showModal (state, { payload }) {
      return { ...state, ...payload, modalVisible: true }
    },

    hideModal (state) {
      return { ...state, modalVisible: false }
    },
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/Object') {
          dispatch({
            type: 'auth', payload: {username: 'admin', password: 'admin' },
          })
        }
      })
    },
  },

  effects: {
    *auth ({ payload }, { call, put }) {
      // throw new Error('haha')
      yield call(auth, payload)

      const data = yield call(query, payload)
      if (data.success) {
        console.log(data)
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.columns,
            pagination: {
              current: 1,
              total: Number(data.columns.length) ,
            },
          },
        })
      } else {
        throw data
      }
    },

    *create ({ payload }, { call, put }) {
      const data = yield call(create, payload)
      if (data.success) {
        yield put({ type: 'hideModal' })
        yield put({ type: 'query' })
      } else {
        throw data
      }
    },

  },

})
