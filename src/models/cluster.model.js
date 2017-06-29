import lodash from 'lodash';
import basicTableModel from './basicTable.model';
import {fetch} from "../services/restfulService";


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
            type: 'queryTableData',
            payload: location.query,
          })
        }
      })
    },
  },
  effects: {
    ...basic.effects,
    *queryTableData ({payload}, {call, put}) {

      const data = yield call(fetch, {url:'cluster'});
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination: {
              total: data.total,
            },
          },
        })
      }
    },

  },
  reducers:{
    ...basic.reducers,
    querySuccess (state, action) {
      const {list, pagination} = action.payload;
      return {
        ...state,
        list,
        listBack: lodash.cloneDeep(list),
        pagination: {
          ...state.pagination,
          ...pagination,
        }
      }
    },

  }

}
