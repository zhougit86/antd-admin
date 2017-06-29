import lodash from 'lodash'
import basicTableModel from './basicTable.model'
import {parse} from 'qs'
import * as usersService from '../services/users'
import {fetch} from "../services/restfulService";
const {query} = usersService;


let basic = lodash.cloneDeep(basicTableModel);

export default {

  namespace: 'cluster',

  state:{
    ...basic.state
  },
  subscriptions: {
    setup ({dispatch, history}) {
      history.listen(location => {
        if (location.pathname === '/cluster') {
          dispatch({
            type: 'query',
            payload: location.query,
          })
        }
      })
    },
  },
  effects: {
    ...basic.effects,
    *query ({payload}, {call, put}) {

      const data = yield call(fetch, {url:'users'});
      if (data) {
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
      }
    },

  },
  reducers:{
    ...basic.reducers,

  }

}
